import { FormEvent, useEffect, useState } from "react";
import { getMoviesList } from "../services/getMoviesList";
import { Movie } from "../interfaces";

export const useMoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchKey, setSearchKey] = useState<string>("");

  const searchMovies = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const moviesList = await getMoviesList(searchKey);
      setMovies(moviesList);
      setSearchKey("");
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  useEffect(() => {
    const loadInitialMovies = async () => {
      try {
        const initialMovies = await getMoviesList();
        setMovies(initialMovies);
      } catch (error) {
        console.error("Error fetching initial movies list:", error);
      }
    };

    loadInitialMovies();
  }, []);

  return { movies, searchKey, setSearchKey, searchMovies };
};
