import { AxiosError } from "axios";
import { api, ApiErrorResponse, handleApiError } from "./axios";
import { Movie } from "../interfaces";

export const getMovieDetails = async (id: number) => {
  
  try {
    const { data } = await api.get<Movie>(`/movie/${id}`, {
      params: { append_to_response: "videos" },
    });

    return data;
  } catch (error) {
    handleApiError(error as AxiosError<ApiErrorResponse>);
    throw error; 
  }
};
