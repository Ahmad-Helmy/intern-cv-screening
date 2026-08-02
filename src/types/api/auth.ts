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

/** What the login form sends. */
export interface LoginRequest {
  email: string;
  password: string;
}

/** The signed-in person — what GET /auth/me returns. */
export interface AuthUser {
  firstName: string;
  lastName: string;
  email: string;
  designation: string;
}

/** The login response — a token, an expiry, and the user fields. */
export interface AuthTokenResponse extends AuthUser {
  token: string;
  expiresAt: string;
}
