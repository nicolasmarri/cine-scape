import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Movie } from "../../interfaces";

type Props = {
  movie: Movie;
  imagePath: string;
};

const MovieCard: FC<Props> = ({ movie, imagePath }) => {
  const navigate = useNavigate();
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg custom-lg mb-3" key={movie.id}>
      <Link to={`/movie/${movie.id}`} className="text-decoration-none">
        <div className="card h-100 rounded-4 card-custom">
          <img
            src={`${imagePath + movie.poster_path}`}
            alt={`${movie.title}`}
            className="card-img-top"
            width="100%"
            onClick={() => navigate(`/movie/${movie?.id}`)}
          />
          <div className="card-body">
            <h4 className="card-title text-center">
              <button className="btn btn-secondary btn-md w-100 btn3D">
                {movie.title}
              </button>
            </h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
