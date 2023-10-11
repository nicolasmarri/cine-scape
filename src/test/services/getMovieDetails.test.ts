import MockAdapter from "axios-mock-adapter";
import { api } from "../../services/axios";
import { getMovieDetails } from "../../services/getMovieDetails";
import { Movie } from "../../interfaces";

const mock = new MockAdapter(api);

describe("getMovieDetails", () => {
  const mockMovieId = 123;
  const mockMovieDetails: Movie = {
    id: mockMovieId,
    title: "Mock Movie",
    overview: "This is a mock movie.",
    backdrop_path: "This is a mock movie.",
    poster_path: "This is a mock movie.",
    videos: {
      results: [{ key: "video_key", name: "video_trailer" }],
    },
  };

  afterEach(() => {
    mock.reset();
  });

  it("fetches movie details successfully", async () => {
    mock.onGet(`/movie/${mockMovieId}`).reply(200, mockMovieDetails);

    const movie = await getMovieDetails(mockMovieId);

    expect(movie).toEqual(mockMovieDetails);
  });

  it("handles API errors", async () => {
    mock.onGet(`/movie/${mockMovieId}`).reply(500);

    await expect(getMovieDetails(mockMovieId)).rejects.toThrow();
  });
});