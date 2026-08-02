/**
 * The response envelope shared by several endpoints.
 *
 * Some endpoints answer with the payload directly, others wrap it. The wrapped
 * ones always return HTTP 200 and carry success/failure in the body, so you
 * cannot rely on the status code alone.
 */
export type ResponseModel<T> = {
  data: T | null;
  isSuccessful: boolean;
  message: string;
  code: string;
};

/** Application code for "the requested resource doesn't exist / hasn't been created yet". */
export const NOT_FOUND_CODE = "003";

/**
 * Unwraps a ResponseModel<T>: throws when the call was not successful,
 * returns the unwrapped data when it was.
 *
 * `"003"` (not found) is treated as an expected empty state rather than an
 * error — e.g. an internship simply has no scoring criteria yet — so it
 * resolves to `null` instead of throwing. Callers that need to distinguish
 * "not found" from other outcomes can still inspect `response.code` before
 * calling this helper.
 */
export const unwrapResponseModel = <T>(
  response: ResponseModel<T>,
): T | null => {
  if (!response.isSuccessful) {
    if (response.code === NOT_FOUND_CODE) return null;
    throw new Error(
      response.message || `Request failed with code ${response.code}`,
    );
  }

  return response.data;
};
