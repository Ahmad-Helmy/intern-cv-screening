/**
 * PLACEHOLDER — auth contract.
 *
 * Endpoints (both plain responses, no envelope):
 *   POST /auth/login → token + user. Real HTTP 401 on bad credentials.
 *   GET  /auth/me    → the user the bearer token belongs to. 401 if invalid.
 *
 * Mock: src/mocks/handlers.ts (the auth handlers), and `mockUser` /
 *       `mockAuthResponse` in src/mocks/data.ts.
 *
 * Both endpoints describe the same person, so `AuthTokenResponse` is just
 * `AuthUser` plus the credential fields — worth expressing in the types rather
 * than writing the four user fields out twice.
 */

/** TODO(intern): what the login form sends. */
export type LoginRequest = unknown;

/** TODO(intern): the signed-in person — what GET /auth/me returns. */
export type AuthUser = unknown;

/** TODO(intern): the login response — a token, an expiry, and the user fields. */
export type AuthTokenResponse = unknown;
