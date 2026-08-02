/**
 * Scoring-criteria service — PLACEHOLDER.
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
 * an empty form), not an error to report.
 */

import api from "./api";
import type { ResponseModel } from "../types/api/common";
import type {
  ScoringCriteria,
  ScoringCriteriaCreate,
  ScoringCriteriaUpdate,
} from "../types/api/scoring-criteria";

/**
 * EXAMPLE (GET, envelope response with an expected failure).
 *
 * TODO(intern): uncomment the guard below once ResponseModel has its
 * `isSuccessful` and `code` fields — "no criteria yet" is a valid answer and
 * should hand back null instead of throwing.
 */
export const getScoringCriteria = async (
  internshipId: string,
): Promise<ScoringCriteria | null> => {
  const response = await api.get<ResponseModel<ScoringCriteria>>(
    `/internships/${internshipId}/scoring-criteria`,
  );

  // if (!response.data.isSuccessful && response.data.code === "003") return null;

  return response.data.data;
};

/**
 * EXAMPLE (POST, envelope response) — save criteria for the first time.
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
  return response.data.data;
};

/**
 * TODO(intern): PUT — update the existing criteria. Same URL as the POST.
 */
export const updateScoringCriteria = async (
  internshipId: string,
  model: ScoringCriteriaUpdate,
): Promise<ScoringCriteria | null> => {
  throw new Error(
    `updateScoringCriteria is not implemented yet (internshipId: ${internshipId}, payload: ${JSON.stringify(model)})`,
  );
};

/**
 * TODO(intern): DELETE — removes the criteria and flips `hasScoringCriteria`
 * back to false on the parent internship, so refetch it afterwards.
 */
export const deleteScoringCriteria = async (
  internshipId: string,
): Promise<void> => {
  throw new Error(
    `deleteScoringCriteria is not implemented yet (internshipId: ${internshipId})`,
  );
};
