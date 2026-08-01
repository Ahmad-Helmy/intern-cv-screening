/**
 * MSW request handlers covering every endpoint the UI consumes.
 *
 * Origin is matched with a leading `*` wildcard so the handlers work regardless
 * of how VITE_API_URL is configured. Endpoints that return the backend's
 * ResponseModel envelope are wrapped with `ok()` / `fail()`; the rest (auth,
 * candidate list & detail) return the payload directly — check each handler
 * before writing the matching service, the two styles are not interchangeable.
 *
 * Pure helpers live in helpers.ts and the seed data in data.ts — this file only
 * wires requests to responses over a small in-memory store, so creates/updates/
 * deletes survive until you reload the page.
 */

import { http, HttpResponse } from "msw";
import {
  candidates,
  internships,
  internshipListItems,
  scoringCriteria,
  mockAuthResponse,
  mockUser,
} from "./data";
import {
  ok,
  fail,
  NOT_FOUND,
  newUuid,
  sumWeights,
  markHasCriteria,
  bearerToken,
  emailFromToken,
} from "./helpers";

/**
 * Request-body shapes, declared locally so the mock layer stays independent of
 * src/types/api — those are yours to write.
 */
type InternshipBody = {
  title: string;
  year: number;
  durationWeeks: number;
  externalJobId?: string | null;
  status?: string;
};

type ScoringCriteriaBody = {
  name: string;
  isActive: boolean;
  majorMatchWeight: number;
  technicalSkillsWeight: number;
  projectsWeight: number;
  experienceWeight: number;
  academicPerformanceWeight: number;
  extracurricularsWeight: number;
  communicationWeight: number;
  minimumGPA?: number | null;
  minGraduationYear?: number | null;
  maxGraduationYear?: number | null;
  minimumVideoFluencyScore: number;
  minimumVideoPresentationScore: number;
  nominationCount: number;
};

// In-memory, mutable copies so create/update/delete behave during a session.
const internshipStore = [...internships];
const listStore = [...internshipListItems];
const criteriaStore = { ...scoringCriteria };

export const handlers = [
  // ── Auth (only the configured test user is accepted) ─────────────────────
  http.post("*/auth/login", async ({ request }) => {
    const body = (await request.json().catch(() => ({}))) as {
      email?: string;
      password?: string;
    };
    const expectedEmail = import.meta.env.VITE_MOCK_USER_EMAIL ?? "demo@celfocus.com";
    const expectedPassword = import.meta.env.VITE_MOCK_USER_PASSWORD ?? "password";

    if (body.email !== expectedEmail || body.password !== expectedPassword) {
      // Mirrors the backend's 401 for invalid credentials.
      return new HttpResponse(null, { status: 401 });
    }

    return HttpResponse.json(mockAuthResponse(expectedEmail));
  }),

  // ── Who am I? (the only endpoint that reads the Authorization header) ─────
  // Answers from the bearer token alone, so a page reload can restore the
  // signed-in user with nothing kept client-side except the token itself.
  // No token, or one we don't recognise, is a 401 — same as an expired session.
  http.get("*/auth/me", ({ request }) => {
    const token = bearerToken(request);
    const email = token ? emailFromToken(token) : null;
    if (!email) return new HttpResponse(null, { status: 401 });

    return HttpResponse.json(mockUser(email));
  }),

  // ── Candidates list (filter + sort, plain array — no envelope) ───────────
  http.get("*/internships/:internshipId/candidates", ({ params, request }) => {
    const { internshipId } = params;
    const url = new URL(request.url);
    const search = url.searchParams.get("search")?.toLowerCase() ?? "";
    const status = url.searchParams.get("status") ?? "";
    const isNominatedParam = url.searchParams.get("isNominated");
    const sortBy = url.searchParams.get("sortBy") ?? "score";
    const sortAsc = url.searchParams.get("sortAsc") === "true";

    let rows = candidates
      .filter((c) => c.internshipId === internshipId)
      .map((c) => c.list);

    if (search) rows = rows.filter((c) => c.name.toLowerCase().includes(search));
    if (status) rows = rows.filter((c) => c.status === status);
    if (isNominatedParam != null) {
      const want = isNominatedParam === "true";
      rows = rows.filter((c) => c.isNominated === want);
    }

    rows = [...rows].sort((a, b) => {
      const cmp =
        sortBy === "name"
          ? a.name.localeCompare(b.name)
          : (a.score ?? -1) - (b.score ?? -1);
      return sortAsc ? cmp : -cmp;
    });

    return HttpResponse.json(rows);
  }),

  // ── Candidate detail (plain object, real 404 when missing) ───────────────
  http.get("*/candidates/:id", ({ params }) => {
    const record = candidates.find((c) => c.detail.id === params.id);
    if (!record) return new HttpResponse(null, { status: 404 });
    return HttpResponse.json(record.detail);
  }),

  // ── Internships list (plain array, { id, name } only) ────────────────────
  http.get("*/internships", () => HttpResponse.json(listStore)),

  // ── Scoring criteria (must precede /internships/:id) ─────────────────────
  http.get("*/internships/:internshipId/scoring-criteria", ({ params }) => {
    const criteria = criteriaStore[params.internshipId as string];
    if (!criteria) return HttpResponse.json(fail(NOT_FOUND, "Scoring criteria not found."));
    return HttpResponse.json(ok(criteria));
  }),

  http.post("*/internships/:internshipId/scoring-criteria", async ({ params, request }) => {
    const internshipId = params.internshipId as string;
    const body = (await request.json()) as ScoringCriteriaBody;
    const created = {
      ...body,
      id: newUuid(),
      internshipId,
      totalWeight: sumWeights(body),
      minimumGPA: body.minimumGPA ?? null,
      minGraduationYear: body.minGraduationYear ?? null,
      maxGraduationYear: body.maxGraduationYear ?? null,
    };
    criteriaStore[internshipId] = created;
    markHasCriteria(internshipStore, internshipId, created.id, true);
    return HttpResponse.json(ok(created));
  }),

  http.put("*/internships/:internshipId/scoring-criteria", async ({ params, request }) => {
    const internshipId = params.internshipId as string;
    const existing = criteriaStore[internshipId];
    if (!existing) return HttpResponse.json(fail(NOT_FOUND, "Scoring criteria not found."));
    const body = (await request.json()) as ScoringCriteriaBody;
    const updated = {
      ...existing,
      ...body,
      totalWeight: sumWeights(body),
      minimumGPA: body.minimumGPA ?? null,
      minGraduationYear: body.minGraduationYear ?? null,
      maxGraduationYear: body.maxGraduationYear ?? null,
    };
    criteriaStore[internshipId] = updated;
    return HttpResponse.json(ok(updated));
  }),

  http.delete("*/internships/:internshipId/scoring-criteria", ({ params }) => {
    const internshipId = params.internshipId as string;
    const existing = criteriaStore[internshipId];
    if (!existing) return HttpResponse.json(fail(NOT_FOUND, "Scoring criteria not found."));
    delete criteriaStore[internshipId];
    markHasCriteria(internshipStore, internshipId, null, false);
    return HttpResponse.json(ok(existing));
  }),

  // ── Internship detail / CRUD (ResponseModel envelope) ────────────────────
  http.get("*/internships/:id", ({ params }) => {
    const found = internshipStore.find((i) => i.id === params.id);
    if (!found) return HttpResponse.json(fail(NOT_FOUND, "Internship not found."));
    return HttpResponse.json(ok(found));
  }),

  http.post("*/internships", async ({ request }) => {
    const body = (await request.json()) as InternshipBody;
    const created = {
      id: newUuid(),
      title: body.title,
      year: body.year,
      durationWeeks: body.durationWeeks,
      externalJobId: body.externalJobId ?? null,
      status: body.status ?? "Draft",
      hasScoringCriteria: false,
      scoringCriteriaId: null,
    };
    internshipStore.push(created);
    listStore.push({ id: created.id, name: created.title });
    return HttpResponse.json(ok(created));
  }),

  http.put("*/internships/:id", async ({ params, request }) => {
    const idx = internshipStore.findIndex((i) => i.id === params.id);
    if (idx === -1) return HttpResponse.json(fail(NOT_FOUND, "Internship not found."));
    const body = (await request.json()) as InternshipBody;
    const updated = {
      ...internshipStore[idx],
      title: body.title,
      year: body.year,
      durationWeeks: body.durationWeeks,
      externalJobId: body.externalJobId ?? null,
      status: body.status ?? internshipStore[idx].status,
    };
    internshipStore[idx] = updated;
    const li = listStore.find((i) => i.id === updated.id);
    if (li) li.name = updated.title;
    return HttpResponse.json(ok(updated));
  }),

  http.delete("*/internships/:id", ({ params }) => {
    const idx = internshipStore.findIndex((i) => i.id === params.id);
    if (idx === -1) return HttpResponse.json(fail(NOT_FOUND, "Internship not found."));
    const [removed] = internshipStore.splice(idx, 1);
    const li = listStore.findIndex((i) => i.id === removed.id);
    if (li !== -1) listStore.splice(li, 1);
    delete criteriaStore[removed.id];
    return HttpResponse.json(ok(removed));
  }),
];
