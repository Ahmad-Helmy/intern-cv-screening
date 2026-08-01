/**
 * The shared axios instance. Every service in this folder goes through it —
 * don't call `axios` directly and don't hardcode the base URL in a service.
 *
 * Base URL comes from VITE_API_URL. With `npm run start-with-mocks` the request
 * never reaches the network: Mock Service Worker intercepts it in the browser
 * and answers from src/mocks. That is why the mock handlers match the path with
 * a `*` wildcard — whatever VITE_API_URL is set to, they still match.
 */

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Attach the bearer token, if we have one, to every outgoing request.
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // A 401 from the login request itself means "bad credentials" — let the
    // login page show its inline error instead of redirecting (which would
    // reload the page and wipe the message). Only redirect for 401s on other
    // requests, i.e. an expired or invalid session.
    // The token is the only thing we persist — the signed-in user comes from
    // GET /auth/me, so there is nothing else to clean up here.
    const isLoginRequest = error.config?.url?.includes("/auth/login");
    if (error.response?.status === 401 && !isLoginRequest) {
      localStorage.removeItem("auth_token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default api;
