import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { handleApiError } from "../../services/axios";
import { getMoviesList } from "../../services/getMoviesList";

const mockApiKey = "your-mock-api-key"; // Un valor de API_KEY falso para las pruebas

describe("getMoviesList", () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterAll(() => {
    mock.restore();
  });

  beforeEach(() => {
    // Configura el valor falso de API_KEY antes de cada prueba
    process.env.VITE_API_KEY = mockApiKey;
  });

  it("should fetch movies list successfully", async () => {
    // Simula una respuesta exitosa
    mock.onGet("https://api.themoviedb.org/3/discover/movie").reply(200, {
      results: [
        { id: 1, title: "Movie 1" },
        { id: 2, title: "Movie 2" },
      ],
    });

    const movies = await getMoviesList();

    // Verifica que la solicitud sea exitosa y devuelve los datos esperados
    expect(movies).toEqual([
      { id: 1, title: "Movie 1" },
      { id: 2, title: "Movie 2" },
    ]);
  });

  it("should fetch movies list with search key successfully", async () => {
    // Simula una respuesta exitosa con un parámetro de búsqueda
    mock.onGet("https://api.themoviedb.org/3/search/movie").reply(200, {
      results: [
        { id: 3, title: "Movie 3" },
        { id: 4, title: "Movie 4" },
      ],
    });

    const movies = await getMoviesList("search-key");

    // Verifica que la solicitud sea exitosa y devuelve los datos esperados
    expect(movies).toEqual([
      { id: 3, title: "Movie 3" },
      { id: 4, title: "Movie 4" },
    ]);
  });

  it("should handle API error", async () => {
    // Simula una respuesta de error
    mock.onGet("https://api.themoviedb.org/3/discover/movie").reply(404);

    try {
      await getMoviesList();
    } catch (error) {
      // Verifica que la función de manejo de errores sea llamada
      expect(handleApiError).toHaveBeenCalled();
    }
  });
});
