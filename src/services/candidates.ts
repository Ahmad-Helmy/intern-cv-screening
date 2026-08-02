/**
 * Candidates service — PLACEHOLDER.
 *
 * Both endpoints return their payload directly (no envelope), so `response.data`
 * is already the thing you want.
 *
 *   GET /internships/:internshipId/candidates  → array, supports filter + sort
 *   GET /candidates/:id                        → one candidate, HTTP 404 if missing
 *
 * The mock serves no POST for candidates (they are imported by the backend, not
 * created from the UI) — the POST pattern is in internships.ts.
 */

import api from "./api";
import type {
  CandidateDetail,
  CandidateListItem,
  CandidatesQuery,
} from "../types/api/candidates";

/**
 * EXAMPLE (GET with query params) — the candidates table.
 *
 * axios turns the `params` object into the query string, and skips keys whose
 * value is `undefined`, so you can pass a partial filter without building the
 * URL by hand. Supported keys: search, status, isNominated, sortBy, sortAsc.
 */
export const getCandidates = async (
  internshipId: string,
  query: CandidatesQuery,
): Promise<CandidateListItem[]> => {
  const response = await api.get<CandidateListItem[]>(
    `/internships/${internshipId}/candidates`,
    { params: query },
  );
  return response.data;
};

/**
 * EXAMPLE (GET by id) — the candidate details page.
 *
 * An unknown id gives a real 404, so this promise rejects; handle it in the
 * page and show a "not found" state rather than a blank screen.
 */
export const getCandidateById = async (
  id: string,
): Promise<CandidateDetail> => {
  const response = await api.get<CandidateDetail>(`/candidates/${id}`);
  return response.data;
};
