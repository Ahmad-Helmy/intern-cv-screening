/**
 * Auth service — PLACEHOLDER.
 *
 * The one POST below is written out in full as the example to copy. There is no
 * GET endpoint for auth; see candidates.ts for the GET pattern.
 *
 * Endpoint: POST /auth/login — plain response, no envelope. Bad credentials
 * come back as HTTP 401, so the promise rejects and the catch block runs.
 */

import api from "./api";
import type { AuthTokenResponse, LoginRequest } from "../types/api/auth";

/** EXAMPLE (POST) — sends the credentials, resolves with the token response. */
export const postLogin = async (
  request: LoginRequest,
): Promise<AuthTokenResponse> => {
  const response = await api.post<AuthTokenResponse>("/auth/login", request);
  return response.data;
};

/**
 * TODO(intern): persist the session so the axios interceptor in api.ts can pick
 * the token up on later requests. It reads `auth_token` (and clears `auth_user`
 * on a 401), so store it under those keys — or wire this into the auth context
 * once that branch lands, whichever the team decides.
 */

/**
 * TODO(intern): the matching logout — clear whatever `postLogin` stored.
 */
