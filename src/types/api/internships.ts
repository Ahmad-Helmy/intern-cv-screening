/**
 * PLACEHOLDER — internships contract.
 *
 * Endpoints:
 *   GET    /internships       → plain array of { id, name }
 *   GET    /internships/:id   → envelope around the full internship
 *   POST   /internships       → envelope
 *   PUT    /internships/:id   → envelope
 *   DELETE /internships/:id   → envelope (returns the removed record)
 *
 * Mock: src/mocks/handlers.ts, `internships` / `internshipListItems`
 *       in src/mocks/data.ts.
 *
 * The list and detail shapes differ — the list item exposes `name`, the detail
 * exposes `title`. Statuses are "Draft" | "Open" | "Closed".
 */

/** TODO(intern): the dropdown shape returned by GET /internships. */
export type InternshipListItem = unknown;

/** TODO(intern): the full internship. Some fields are nullable. */
export type InternshipDetail = unknown;

/** TODO(intern): the POST body. Compare with `InternshipBody` in the handlers. */
export type InternshipCreate = unknown;

/** TODO(intern): the PUT body. */
export type InternshipUpdate = unknown;
