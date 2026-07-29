export interface Internship {
  id: string;
  title: string;
  year: number;
  durationWeeks: number;
  status: "Open" | "Closed" | "Draft";
  externalJobId: string;
  hasScoringCriteria: boolean | false;
  scoringCriteriaId?: string;
}
