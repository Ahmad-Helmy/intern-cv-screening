/**
 * PLACEHOLDER — the response envelope shared by several endpoints.
 *
 * Some endpoints answer with the payload directly, others wrap it. The wrapped
 * ones always return HTTP 200 and carry success/failure in the body, so you
 * cannot rely on the status code alone.
 *
 * TODO(intern): complete the envelope. `ok()` and `fail()` in
 * src/mocks/helpers.ts build exactly what the server sends.
 */
export type ResponseModel<T> = {
  data: T | null;
  // TODO: the other three fields — one of them tells you whether it worked,
  // one carries a human-readable message, one carries an application code.
};

/**
 * TODO(intern): a small helper that takes a ResponseModel<T>, throws (or
 * otherwise surfaces the failure) when the call was not successful, and returns
 * the unwrapped data when it was. Every envelope-style service will want it.
 *
 * Watch out for `"003"` (not found): for scoring criteria that is an expected
 * state — an internship simply has no criteria yet — so it should probably
 * resolve to `null` rather than blow up.
 */
