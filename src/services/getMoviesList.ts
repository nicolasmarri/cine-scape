import { AxiosError } from "axios";
import { api, ApiErrorResponse, handleApiError } from "./axios";
import { MovieApiResponse } from "../interfaces";

export const getMoviesList = async (searchKey?: string) => {
  const type = searchKey ? "search" : "discover";

  try {
    const {
      data: { results },
    } = await api.get<MovieApiResponse>(`/${type}/movie`, {
      params: searchKey ? { query: searchKey } : undefined,
    });
    return results;
  } catch (error) {
    handleApiError(error as AxiosError<ApiErrorResponse>);
    throw error;
  }
};
