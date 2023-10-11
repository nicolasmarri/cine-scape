import { renderHook, waitFor } from "@testing-library/react";
import useMovieDetails from "../../hooks/useMovieDetails";
import { getMovieDetails } from "../../services/getMovieDetails";

jest.mock("../services/getMovieDetails");

describe("useMovieDetails hook", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("fetches and sets movie details correctly", async () => {
    const mockMovie = {
      id: 1,
      title: "Mock Movie",
      videos: { results: [{ name: "Official Trailer", id: "vid1" }] },
    };
    (getMovieDetails as jest.Mock).mockResolvedValue(mockMovie);

    const { result } = renderHook(() => useMovieDetails(1));

    expect(result.current.movie).toBeNull();
    expect(result.current.trailer).toBeNull();

    await waitFor(() => expect(result.current.movie).toEqual(mockMovie));

    expect(result.current.trailer).toEqual(mockMovie.videos.results[0]);
  });

  it('sets the trailer correctly if "Official Trailer" is not present', async () => {
    const mockMovie = {
      id: 1,
      title: "Mock Movie",
      videos: { results: [{ name: "Some Other Trailer", id: "vid1" }] },
    };
    (getMovieDetails as jest.Mock).mockResolvedValue(mockMovie);

    const { result } = renderHook(() => useMovieDetails(1));

    expect(result.current.movie).toBeNull();
    expect(result.current.trailer).toBeNull();

    await waitFor(() => expect(result.current.movie).toEqual(mockMovie));

    expect(result.current.trailer).toEqual(mockMovie.videos.results[0]);
  });

  it("handles API errors gracefully", async () => {
    (getMovieDetails as jest.Mock).mockRejectedValue(new Error("API error"));

    const { result } = renderHook(() => useMovieDetails(1));

    expect(result.current.movie).toBeNull();
    expect(result.current.trailer).toBeNull();
  });
});
