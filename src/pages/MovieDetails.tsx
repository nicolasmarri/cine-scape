import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import { TrailerModal } from "../components";
import MovieOverview from "../components/MovieOverview/MovieOverview";

const MovieDetails = () => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const [playing, setPlaying] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const { movie, trailer } = useMovieDetails(Number(id));
  const navigate = useNavigate();

  return (
    <div>
      {movie && (
        <div
          className="viewtrailer"
          style={{
            backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
          }}
        >
          {playing && trailer ? (
            <TrailerModal
              trailerKey={trailer.key}
              onClose={() => setPlaying(false)}
            />
          ) : (
            <MovieOverview
              movie={movie}
              onPlayTrailer={() => setPlaying(true)}
              onNavigateHome={() => navigate("/")}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
