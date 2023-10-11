import axios, { AxiosError } from "axios";
import { API_KEY } from "./config";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
});

/* Manejo de Errores Centralizados */
export interface ApiErrorResponse {
  message: string;
  statusCode: number;
}
export const handleApiError = (error: AxiosError<ApiErrorResponse>) => {
  if (!error.response) {
    console.error("Error no identificado:", error);
    throw new Error("Error desconocido.");
  }

  console.error(error.response.data);
  console.error(error.response.status);
  console.error(error.response.headers);

  if (error.response.status === 404) {
    throw new Error("Recurso no encontrado.");
  }

  throw new Error(error.response.data.message || "Error en la API.");
};
