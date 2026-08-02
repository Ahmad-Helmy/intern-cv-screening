# `src/types/api` — the API contract (your job)

These files are **placeholders**. Every type in here is `unknown` until you
replace it with the real shape.

They are deliberately kept separate from the UI types in `src/types/*.ts` (the
ones written against `mockData.tsx`). Those describe what a component wants to
render; these describe what the backend actually sends. They are **not** the
same — e.g. the API sends `status: "Nominated"`, while `types/candidates.ts`
models it as `status: { status: "Nominated" }`.

## How to fill one in

1. Find the endpoint in `src/mocks/handlers.ts`.
2. Look at the object it returns in `src/mocks/data.ts`.
3. Even better: run `npm run start-with-mocks`, trigger the call, and read the
   real JSON in the browser's Network tab.
4. Write the interface, then use it in the matching `src/services/*.ts`.

## Two response styles — don't mix them up

| Style | Endpoints | What `response.data` is |
| --- | --- | --- |
| Plain | `POST /auth/login`, `GET /auth/me`, both candidate endpoints, `GET /internships` | the payload itself |
| Envelope | everything else under `/internships` and `/scoring-criteria` | `{ data, message, isSuccessful, code }` |

Envelope endpoints always return HTTP 200 — a failure shows up as
`isSuccessful: false` with a `code` (`"003"` means not found), so checking the
HTTP status alone is not enough.

## Things the mock data will make you handle

- `score`, `recommendation`, `profile` and `evaluation` are **absent** for
  candidates still `Imported` or `Processing`. Optional properties, not
  required ones.
- `videoStatus` has five states, not two: `Pending`, `Processing`, `Pass`,
  `Fail`, `NotProvided`.
- `recommendation` values have no spaces: `StronglyRecommended`.
- The internship list endpoint returns `{ id, name }`, while the detail
  endpoint returns `title` — they are different shapes.
- `externalJobId`, `minimumGPA`, `minGraduationYear`, `maxGraduationYear` and
  `scoringCriteriaId` can be `null`.
