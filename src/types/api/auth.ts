/**
 * PLACEHOLDER — auth contract.
 *
 * Endpoint: POST /auth/login  (plain response, no envelope)
 * Mock:     src/mocks/handlers.ts (the auth/login handler)
 *           src/mocks/data.ts     → `mockAuthResponse`
 *
 * Invalid credentials come back as a real HTTP 401, so axios will reject.
 */

/** TODO(intern): what the login form sends. */
export type LoginRequest = unknown;

/** TODO(intern): what the server sends back — a token, an expiry and the user. */
export type AuthTokenResponse = unknown;

/** TODO(intern): the subset of the response worth keeping in app state. */
export type AuthUser = unknown;
