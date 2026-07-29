export interface CandidateProfile {
  graduationYear: number;
  skills: string[];
  languages: string[];
  projects: string[];
  experience: string[];
  certifications: string[];
  extracurriculars: string[];
}

export interface ScoreBreakdownItem {
  dimension: string;
  score: number;
  weight: number;
  contribution: number;
}

export interface CandidateEvaluation {
  score: number;
  selectionReason: string;
  videoFluencyScore: number;
  videoPresentationScore: number;
  reportText: string;
  scoreBreakdown: ScoreBreakdownItem[];
  strengths: string[];
  weaknesses: string[];
  riskNotes: string[];
}

export interface Candidate {
  id: string;
  name: string;
  email: string;
  university: string;
  major: string;
  gpa: number | 0;
  status: "Nominated" | "Rejected" | "Under Review";
  score: number;
  isNominated: boolean;
  videoStatus: "Pass" | "Fail" | string;
  recommendation:
    | "Strongly Recommended"
    | "Recommended"
    | "Not Recommended"
    | string;
  phone?: string;
  trackPreference: string;
  profile?: CandidateProfile;
  evaluation?: CandidateEvaluation;
}
