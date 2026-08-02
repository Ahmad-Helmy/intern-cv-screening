/**
 * PLACEHOLDER — internships contract.
 *
 * Endpoints:
 *   GET    /internships       → plain array of { id, name } (InternshipListItem [])
 *   GET    /internships/:id   → envelope around the full internship (InternshipDetail)
 *   POST   /internships       → envelope (InternshipCreate)
 *   PUT    /internships/:id   → envelope (InternshipUpdate)
 *   DELETE /internships/:id   → envelope (returns the removed record) (InternshipDetail)
 *
 * Mock: src/mocks/handlers.ts, `internships` / `internshipListItems`
 *       in src/mocks/data.ts.
 *
 * The list and detail shapes differ — the list item exposes `name`, the detail
 * exposes `title`. Statuses are "Draft" | "Open" | "Closed".
 */

export type InternshipStatus = "Draft" | "Open" | "Closed";

export type InternshipListItem = {
  id: string;
  name: string;
};

export type InternshipDetail = {
  id: string;
  title: string;
  year: number;
  durationWeeks: number;
  externalJobId: string | null;
  status: InternshipStatus;
  hasScoringCriteria: boolean;
  scoringCriteriaId: string | null;
};

export type InternshipCreate = {
  title: string;
  year: number;
  durationWeeks: number;
  externalJobId: string | null;
  status: InternshipStatus;
};

export type InternshipUpdate = Partial<InternshipCreate>;
