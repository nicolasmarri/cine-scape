import { FC } from "react";
import { Footer, MoviesList, Navbar } from "../components";
import { useMoviesList } from "../hooks/useMoviesList";

const Home: FC = () => {
  const { searchKey, setSearchKey, searchMovies, movies } = useMoviesList();

  return (
    <>
      <div>
        <Navbar
          searchKey={searchKey}
          setSearchKey={setSearchKey}
          searchMovies={searchMovies}
        />
        <MoviesList movies={movies} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
