import { FC } from "react";
import { MovieCard } from "..";
import { Movie } from "../../interfaces";
import { useMemo } from "react";

type Props = {
  movies: Movie[];
};

const MoviesList: FC<Props> = ({ movies }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  const filteredMovies = useMemo(
    () => movies.filter((movie) => movie.poster_path),
    [movies]
  );

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} imagePath={IMAGE_PATH} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
