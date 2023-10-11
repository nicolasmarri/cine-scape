import { FC } from "react";
import { Movie } from "../../interfaces";

type Props = {
  movie: Movie;
  onPlayTrailer: () => void;
  onNavigateHome: () => void;
};

const MovieOverview: FC<Props> = ({ movie, onPlayTrailer, onNavigateHome }) => {
  return (
    <div className="container" style={{ marginBottom: "40px" }}>
      <h1 className="text-white">{movie.title}</h1>
      <p className="text-white">{movie.overview}</p>

      <button type="button" className="boton" onClick={onPlayTrailer}>
        Play Trailer
      </button>

      <button type="button" className="boton ms-3" onClick={onNavigateHome}>
        Go to Home
      </button>
    </div>
  );
};

export default MovieOverview;
