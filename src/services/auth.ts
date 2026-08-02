/**
 * Auth service — PLACEHOLDER.
 *
 * Two endpoints, both plain responses (no envelope):
 *   POST /auth/login → credentials in, token + user out. 401 on bad credentials.
 *   GET  /auth/me    → who the bearer token belongs to. 401 if absent/invalid.
 *
 * The split matters: `postLogin` is the only call that takes a password, and
 * `getCurrentUser` is the only one that needs no arguments at all — the axios
 * interceptor in api.ts attaches the token for you.
 */

import api from "./api";
import type {
  AuthTokenResponse,
  AuthUser,
  LoginRequest,
} from "../types/api/auth";

/** The single key we keep in localStorage. Nothing else about the user is persisted. */
const TOKEN_KEY = "auth_token";

/** EXAMPLE (POST) — sends the credentials, resolves with the token response. */
export const postLogin = async (
  request: LoginRequest,
): Promise<AuthTokenResponse> => {
  const response = await api.post<AuthTokenResponse>("/auth/login", request);
  console.log("postLogin response:", response.data); // Log the response data for debugging
  return response.data;
};

/**
 * EXAMPLE (GET, authenticated) — resolves with the signed-in user.
 *
 * Note there is no parameter. The request interceptor in api.ts reads the token
 * out of localStorage and sets `Authorization: Bearer <token>`, and the server
 * works out who you are from that. This is why the token is the only thing
 * worth persisting: identity is derived, never stored.
 *
 * Rejects with a 401 when the token is missing, malformed or expired — and the
 * response interceptor will already have cleared the token and sent the browser
 * to /login by the time your catch block runs.
 */
export const getCurrentUser = async (): Promise<AuthUser> => {
  const response = await api.get<AuthUser>("/auth/me");
  return response.data;
};

/** Stores the credential so later requests are authenticated. */
export const storeToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

/** Drops the credential. Call this from the auth context's `logout`. */
export const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getStoredToken = () => localStorage.getItem(TOKEN_KEY);

/**
 * TODO(intern): wire the two calls above into AuthProvider, replacing the
 * placeholder `login` that currently accepts any non-empty pair.
 *
 * There are two separate flows, and it's worth being clear about which is which:
 *
 * 1. SIGNING IN (the user submits the form)
 *      const auth = await postLogin({ email, password });
 *      storeToken(auth.token);
 *      setUser({ firstName, lastName, email, designation } from auth);
 *    The login response already contains the user, so no /auth/me call is
 *    needed here. A wrong password rejects with a 401 — catch it and show the
 *    inline error rather than letting it bubble.
 *
 * 2. RESTORING A SESSION (the page is reloaded / opened in a new tab)
 *    React state is gone but the token is still in localStorage, so on mount:
 *      if (!getStoredToken()) -> not signed in, done.
 *      otherwise getCurrentUser() -> setUser(...), or on 401 clearToken().
 *    This is what replaces persisting the profile: the server tells you who the
 *    token belongs to, so localStorage never holds anything that can go stale
 *    or be edited in DevTools.
 *
 * WATCH OUT — the redirect race. `getCurrentUser` is asynchronous, so on the
 * first render after a reload `user` is still null even though the token is
 * perfectly valid. ProtectedRoute would see null and bounce a signed-in user
 * to /login. AuthProvider therefore needs a third state, not two:
 *
 *      "checking"       -> render nothing (or a spinner); decide nothing yet
 *      "signed-in"      -> user object
 *      "signed-out"     -> null
 *
 * ProtectedRoute must only redirect in the "signed-out" case. A boolean
 * `isLoading` alongside `user` is enough — the point is that "we don't know
 * yet" and "definitely not signed in" cannot be the same value.
 *
 * `logout` then becomes: clearToken() + setUser(null).
 */

export const login = async (credentials: LoginRequest) => {
    const authResponse = await postLogin(credentials);

    storeToken(authResponse.token);
  };

export const restoreSession = async (): Promise<AuthUser | null> => {
    const token = getStoredToken();
    if (!token) {
      return null;
    }
    const user = await getCurrentUser();
    return user;
  }
