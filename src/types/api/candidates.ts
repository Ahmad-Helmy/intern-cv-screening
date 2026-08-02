/**
 * PLACEHOLDER — candidates contract.
 *
 * Endpoints (both plain responses, no envelope):
 *   GET /internships/:internshipId/candidates  → array of list items
 *   GET /candidates/:id                        → one detail object (404 if missing)
 *
 * Mock: src/mocks/handlers.ts, and `list` / `detail` in `buildCandidate`
 *       (src/mocks/data.ts).
 *
 * The list row and the detail object are NOT the same shape — the list is a
 * flattened summary, the detail nests `profile` and `evaluation`.
 */

/** TODO(intern): one row of the candidates table. Mind the optional fields. */
export type CandidateListItem = unknown;

/** TODO(intern): the candidate details page payload. */
export type CandidateDetail = unknown;

/** TODO(intern): the CV-derived part of the detail — absent for Imported candidates. */
export type CandidateProfile = unknown;

/** TODO(intern): the AI evaluation — absent until the candidate is evaluated. */
export type CandidateEvaluation = unknown;

/** TODO(intern): one row of `evaluation.scoreBreakdown`. */
export type ScoreBreakdownItem = unknown;

/**
 * TODO(intern): the query string the list endpoint understands.
 *
 * The handler reads: search, status, isNominated, sortBy ("score" | "name"),
 * sortAsc. All optional — omit them and you get every candidate, sorted by
 * score descending.
 */
export type CandidatesQuery = unknown;
