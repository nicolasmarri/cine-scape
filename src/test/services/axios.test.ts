import { api, handleApiError } from "../../services/axios";

jest.mock("../../services/config", () => ({
  API_KEY: "MOCKED_API_KEY",
}));

// Mockeamos axios
jest.mock("axios", () => ({
  create: jest.fn(() => ({
    defaults: {
      baseURL: "https://api.themoviedb.org/3",
      params: {
        api_key: "MOCKED_API_KEY",
      },
    },
  })),
}));

describe("API Services", () => {
  describe("handleApiError", () => {
    it("throws an unidentified error if no error response is present", () => {
      const error = {
        response: undefined,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;

      expect(() => handleApiError(error)).toThrow("Error desconocido.");
    });

    it("throws a not found error for 404 responses", () => {
      const error = {
        response: {
          status: 404,
          data: {},
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;

      expect(() => handleApiError(error)).toThrow("Recurso no encontrado.");
    });

    it("throws the API error message if present", () => {
      const message = "An example error message.";
      const error = {
        response: {
          status: 500,
          data: { message },
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;

      expect(() => handleApiError(error)).toThrow(message);
    });

    it("throws a generic API error if no message is present", () => {
      const error = {
        response: {
          status: 500,
          data: {},
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;

      expect(() => handleApiError(error)).toThrow("Error en la API.");
    });
  });

  describe("api configuration", () => {
    it("has the correct baseURL", () => {
      expect(api.defaults.baseURL).toBe("https://api.themoviedb.org/3");
    });

    it("includes the API_KEY as a default parameter", () => {
      expect(api.defaults.params).toEqual({ api_key: expect.any(String) });
    });
  });
});







