import { useEffect, useState } from "react";
import { Movie, Video } from "../interfaces";
import { getMovieDetails } from "../services/getMovieDetails";

const useMovieDetails = (id: number) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [trailer, setTrailer] = useState<Video | null>(null);

  useEffect(() => {
    const loadDetails = async () => {
      try {
        const movieDetails = await getMovieDetails(id);
        setMovie(movieDetails);

        if (movieDetails.videos && movieDetails.videos.results.length > 0) {
          const trailerInfo =
            movieDetails.videos.results.find(
              (vid) => vid.name === "Official Trailer"
            ) || movieDetails.videos.results[0];
          setTrailer(trailerInfo);
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (id) loadDetails();
  }, [id]);

  return { movie, trailer };
};

export default useMovieDetails;
