/**
 * PLACEHOLDER — scoring-criteria contract.
 *
 * All four endpoints use the envelope:
 *   GET    /internships/:internshipId/scoring-criteria
 *   POST   /internships/:internshipId/scoring-criteria
 *   PUT    /internships/:internshipId/scoring-criteria
 *   DELETE /internships/:internshipId/scoring-criteria
 *
 * Mock: src/mocks/handlers.ts, `scoringCriteria` in src/mocks/data.ts.
 *
 * An internship may legitimately have no criteria yet — the GET then answers
 * `isSuccessful: false` with code "003". That is not an error to show the user.
 *
 * Note `totalWeight` is computed by the server (sum of the seven weights), so
 * it belongs on the response type but not on the create/update bodies.
 */

/** TODO(intern): the criteria as returned by the server. */
export type ScoringCriteria = unknown;

/** TODO(intern): the POST body. Compare with `ScoringCriteriaBody` in the handlers. */
export type ScoringCriteriaCreate = unknown;

/** TODO(intern): the PUT body. */
export type ScoringCriteriaUpdate = unknown;
