import { useState, useDeferredValue, useEffect } from "react";
import { data } from "../../constants/data";
export function useMainContainer() {
  const [movieData, setMovieData] = useState(data);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const deferredSearchTerm = useDeferredValue(searchTerm);

  const onChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (!deferredSearchTerm) {
      setMovieData(data);
      return;
    }

    const filteredMovies = data?.filter((movie) => {
      const titleMatch = movie.Title.toLowerCase().includes(
        deferredSearchTerm.toLowerCase()
      );
      const genreMatch = movie.Genre.toLowerCase().includes(
        deferredSearchTerm.toLowerCase()
      );
      return titleMatch || genreMatch;
    });
    setMovieData(filteredMovies);
  }, [deferredSearchTerm]);

  const restHanlder = (value = false) => {
    setSearchTerm("");
    setMovieData(data);
    if (value) {
      setSelectedMovie(null);
    }
  };

  return {
    selectedMovie,
    setSelectedMovie,
    movieData,
    onChangeHandler,
    restHanlder,
  };
}
