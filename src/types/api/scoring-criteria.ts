/**
 * Scoring-criteria API contract.
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

/** The criteria as returned by the server. */
export interface ScoringCriteria {
  readonly id: string;
  readonly internshipId: string;
  name: string;
  isActive: boolean;
  majorMatchWeight: number;
  technicalSkillsWeight: number;
  projectsWeight: number;
  experienceWeight: number;
  academicPerformanceWeight: number;
  extracurricularsWeight: number;
  communicationWeight: number;
  readonly totalWeight: number;
  minimumGPA: number | null;
  minGraduationYear: number | null;
  maxGraduationYear: number | null;
  minimumVideoFluencyScore: number;
  minimumVideoPresentationScore: number;
  nominationCount: number;
}

/** The POST body. Server-owned fields are deliberately excluded. */
export interface ScoringCriteriaCreate {
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
}

/** The PUT body. PUT replaces the same client-owned fields accepted by POST. */
export type ScoringCriteriaUpdate = ScoringCriteriaCreate;
