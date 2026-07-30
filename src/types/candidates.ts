import type { Internship } from "./internships";

export interface Status {
  status: "Imported" | "Processing" | "Evaluated" | "Nominated" | "Rejected";
}

export interface VideoStatus {
  status: "Pass" | "Fail";
}

export interface Recommendation {
  status: "Strongly Recommended" | "Recommended" | "Not Recommended";
}

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
  readonly id: string;
  name: string;
  email: string;
  university: string;
  major: string;
  gpa: number;
  status: Status;
  score: number;
  isNominated?: boolean;
  videoStatus: VideoStatus;
  recommendation: Recommendation;
  phone: string;
  trackPreference: string;
  profile?: CandidateProfile;
  evaluation?: CandidateEvaluation;
  internships: Internship[];
}
