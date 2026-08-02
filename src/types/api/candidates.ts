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

export type CandidateStatus =
  | "Imported"
  | "Processing"
  | "Evaluated"
  | "Nominated"
  | "Rejected";

export type VideoStatus =
  | "Pending"
  | "Processing"
  | "Pass"
  | "Fail"
  | "NotProvided";

export type Recommendation =
  | "StronglyRecommended"
  | "Recommended"
  | "NotRecommended";

export type CandidateListItem = {
  id: string;
  name: string;
  email: string;
  status: CandidateStatus;
  videoStatus: VideoStatus;
  isNominated: boolean;
  score?: number;
  recommendation?: string;
  university?: string;
  major?: string;
  gpa?: number;
};

export type CandidateDetail = {
  id: string;
  name: string;
  email: string;
  phone: string;
  trackPreference: string;
  status: CandidateStatus;
  videoStatus: VideoStatus;
  profile?: CandidateProfile;
  evaluation?: CandidateEvaluation;
};

export type CandidateProfile = {
  university: string;
  major: string;
  graduationYear: number;
  gpa: number;
  skills: string[];
  projects: string[];
  experience: string[];
  certifications: string[];
  languages: string[];
  extracurriculars: string[];
};

/** TODO(intern): the AI evaluation — absent until the candidate is evaluated. */
export type CandidateEvaluation = {
  score: number;
  isNominated: boolean;
  recommendation: Recommendation;
  selectionReason: string;
  reportText: string;
  videoFluencyScore: number;
  videoPresentationScore: number;
  scoreBreakdown: ScoreBreakdownItem[];
  strengths: string[];
  weaknesses: string[];
  riskNotes: string[];
};
/** TODO(intern): one row of `evaluation.scoreBreakdown`. */
export type ScoreBreakdownItem = {
  dimension: string;
  score: number;
  weight: number;
  contribution: number;
};

/**
 * TODO(intern): the query string the list endpoint understands.
 *
 * The handler reads: search, status, isNominated, sortBy ("score" | "name"),
 * sortAsc. All optional — omit them and you get every candidate, sorted by
 * score descending.
 */
export type CandidatesQuery = unknown;
