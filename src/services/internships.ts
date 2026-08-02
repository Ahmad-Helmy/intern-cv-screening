/**
 * Internships service — PLACEHOLDER.
 *
 * Mixed response styles, so read each one carefully:
 *   GET    /internships       → plain array of { id, name }
 *   GET    /internships/:id   → ResponseModel envelope
 *   POST   /internships       → ResponseModel envelope
 *   PUT    /internships/:id   → ResponseModel envelope
 *   DELETE /internships/:id   → ResponseModel envelope
 *
 * Envelope endpoints answer HTTP 200 even when they fail, so axios does NOT
 * reject — you have to look at `isSuccessful` yourself.
 */

import api from "./api";
import { unwrapResponseModel, type ResponseModel } from "../types/api/common";
import type {
  InternshipCreate,
  InternshipDetail,
  InternshipListItem,
  InternshipUpdate,
} from "../types/api/internships";

/**
 * EXAMPLE (GET, plain response) — the internship dropdown.
 *
 * No envelope here: `response.data` is the array itself.
 */
export const getInternships = async (): Promise<InternshipListItem[]> => {
  const response = await api.get<InternshipListItem[]>("/internships");
  return response.data;
};

/**
 * EXAMPLE (GET, envelope response) — one internship.
 *
 * Note the double `.data`: the outer one is axios's, the inner one is the
 * envelope's payload.
 *
 * TODO(intern): once you have written the unwrap helper in types/api/common.ts,
 * replace the manual access below with it, and make this reject on
 * `isSuccessful: false` so callers can't silently render nothing.
 */
export const getInternshipById = async (
  id: string,
): Promise<InternshipDetail | null> => {
  const response = await api.get<ResponseModel<InternshipDetail>>(
    `/internships/${id}`,
  );
  return unwrapResponseModel(response.data);
};

/**
 * EXAMPLE (POST, envelope response) — create an internship.
 *
 * Same shape as the PUT you'll write next: body in, created record out.
 */
export const createInternship = async (
  model: InternshipCreate,
): Promise<InternshipDetail | null> => {
  const response = await api.post<ResponseModel<InternshipDetail>>(
    "/internships",
    model,
  );
  return unwrapResponseModel(response.data);
};

/**
 * TODO(intern): PUT /internships/:id — resolves with the updated internship.
 * Follow createInternship; only the verb and the URL change.
 */
export const updateInternship = async (
  id: string,
  model: InternshipUpdate,
): Promise<InternshipDetail | null> => {
  const response = await api.put<ResponseModel<InternshipDetail>>(
    `/internships/${id}`,
    model,
  );

  return unwrapResponseModel(response.data);
};

/**
 * TODO(intern): DELETE /internships/:id — the envelope carries the removed
 * record, but the caller probably only cares that it succeeded.
 */
export const deleteInternship = async (id: string): Promise<void> => {
  const response = await api.delete<ResponseModel<InternshipDetail>>(
    `/internships/${id}`,
  );
  unwrapResponseModel(response.data);
};
