export interface InternshipStatus {
  status: "Open" | "Closed" | "Draft";
}

export interface Internship {
  id: string;
  title: string;
  year: number;
  durationWeeks: number;
  status: InternshipStatus;
  externalJobId: string;
  hasScoringCriteria: boolean;
  scoringCriteriaId: string;
}
