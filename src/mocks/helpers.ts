/**
 * Shared helpers for the mock layer — kept separate from the data definitions
 * (data.ts) and the request handlers (handlers.ts) so each of those stays
 * focused on its own concern.
 *
 * Nothing here imports from src/types on purpose: the mock layer is the
 * reference the API types are written against, not the other way round.
 */

// ── Data-generation helpers ──────────────────────────────────────────────────

/** Deterministic PRNG (mulberry32) so generated data is stable across reloads. */
export const makeRng = (seed: number) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

export const pick = <T>(rng: () => number, arr: readonly T[]): T =>
  arr[Math.floor(rng() * arr.length)];

export const pickSome = <T>(
  rng: () => number,
  arr: readonly T[],
  min: number,
  max: number,
): T[] => {
  const count = min + Math.floor(rng() * (max - min + 1));
  const pool = [...arr];
  const out: T[] = [];
  for (let i = 0; i < count && pool.length; i++) {
    out.push(pool.splice(Math.floor(rng() * pool.length), 1)[0]);
  }
  return out;
};

export const range = (rng: () => number, min: number, max: number) =>
  min + Math.floor(rng() * (max - min + 1));

export const round2 = (n: number) => Math.round(n * 100) / 100;

/** Stable, well-formed UUID derived from a numeric seed. */
export const uuid = (n: number) => {
  const hex = n.toString(16).padStart(12, "0");
  return `00000000-0000-4000-8000-${hex}`;
};

/** Fresh UUID for entities created at runtime (POST handlers). */
export const newUuid = () =>
  "00000000-0000-4000-9000-" +
  Date.now().toString(16).padStart(12, "0").slice(-12);

// ── Response-envelope helpers ────────────────────────────────────────────────
// The backend wraps some endpoints in a ResponseModel<T>: HTTP is always 200
// and success/failure is carried in the body. `ok()` and `fail()` below produce
// exactly that envelope — model your ResponseModel<T> type on their output.

/** Application code returned when an entity is not found. */
export const NOT_FOUND = "003";

export const ok = <T>(data: T) => ({
  data,
  message: "",
  isSuccessful: true,
  code: "",
});

export const fail = (code: string, message: string) => ({
  data: null,
  message,
  isSuccessful: false,
  code,
});

// ── Scoring-criteria helpers ─────────────────────────────────────────────────

/** The seven weighted dimensions add up to the criteria's totalWeight. */
export const sumWeights = (c: {
  majorMatchWeight: number;
  technicalSkillsWeight: number;
  projectsWeight: number;
  experienceWeight: number;
  academicPerformanceWeight: number;
  extracurricularsWeight: number;
  communicationWeight: number;
}): number =>
  c.majorMatchWeight +
  c.technicalSkillsWeight +
  c.projectsWeight +
  c.experienceWeight +
  c.academicPerformanceWeight +
  c.extracurricularsWeight +
  c.communicationWeight;

/** Reflects scoring-criteria existence onto the parent internship record. */
export const markHasCriteria = (
  store: {
    id: string;
    hasScoringCriteria: boolean;
    scoringCriteriaId: string | null;
  }[],
  internshipId: string,
  criteriaId: string | null,
  has: boolean,
) => {
  const internship = store.find((i) => i.id === internshipId);
  if (internship) {
    internship.hasScoringCriteria = has;
    internship.scoringCriteriaId = criteriaId;
  }
};
