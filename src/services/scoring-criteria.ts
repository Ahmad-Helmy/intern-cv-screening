/**
 * Scoring-criteria service.
 *
 * All four endpoints are nested under an internship and all use the
 * ResponseModel envelope:
 *   GET    /internships/:internshipId/scoring-criteria
 *   POST   /internships/:internshipId/scoring-criteria
 *   PUT    /internships/:internshipId/scoring-criteria
 *   DELETE /internships/:internshipId/scoring-criteria
 *
 * Special case: an internship with no criteria yet answers `isSuccessful: false`
 * with code "003". That is a normal empty state (the settings page should show
 * an empty form), not an error to report — unwrapResponseModel() handles that
 * for us and resolves to null instead of throwing.
 */

import api from "./api";
import type { ResponseModel } from "../types/api/common";
import { unwrapResponseModel } from "../types/api/common";
import type {
  ScoringCriteria,
  ScoringCriteriaCreate,
  ScoringCriteriaUpdate,
} from "../types/api/scoring-criteria";

/**
 * GET, envelope response with an expected failure.
 *
 * "No criteria yet" (code "003") is a valid answer and hands back null
 * instead of throwing.
 */
export const getScoringCriteria = async (
  internshipId: string,
): Promise<ScoringCriteria | null> => {
  const response = await api.get<ResponseModel<ScoringCriteria>>(
    `/internships/${internshipId}/scoring-criteria`,
  );

  return unwrapResponseModel(response.data);
};

/**
 * POST, envelope response — save criteria for the first time.
 *
 * The server computes `totalWeight` from the seven weights, so don't send it.
 */
export const createScoringCriteria = async (
  internshipId: string,
  model: ScoringCriteriaCreate,
): Promise<ScoringCriteria | null> => {
  const response = await api.post<ResponseModel<ScoringCriteria>>(
    `/internships/${internshipId}/scoring-criteria`,
    model,
  );
  return unwrapResponseModel(response.data);
};

/**
 * PUT — update the existing criteria. Same URL as the POST.
 */
export const updateScoringCriteria = async (
  internshipId: string,
  model: ScoringCriteriaUpdate,
): Promise<ScoringCriteria | null> => {
  const response = await api.put<ResponseModel<ScoringCriteria>>(
    `/internships/${internshipId}/scoring-criteria`,
    model,
  );
  return unwrapResponseModel(response.data);
};

/**
 * DELETE — removes the criteria and flips `hasScoringCriteria` back to false
 * on the parent internship, so refetch it afterwards.
 */
export const deleteScoringCriteria = async (
  internshipId: string,
): Promise<void> => {
  const response = await api.delete<ResponseModel<ScoringCriteria>>(
    `/internships/${internshipId}/scoring-criteria`,
  );
  unwrapResponseModel(response.data);
};
