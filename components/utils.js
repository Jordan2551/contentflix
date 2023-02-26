import { MOVIES } from '../constants/movies';

export const getMoviesByCategories = () => {
  const result = [];

  MOVIES.forEach((movie) => {
    if (movie.category in result) {
      result[movie.category].push(movie);
    } else {
      result[movie.category] = [movie];
    }
  });

  return result;
};

export const filterMovies = (search) => {
  const moviesByCategory = getMoviesByCategories();
  let result = {};

  Object.entries(moviesByCategory).forEach(([category, movies]) => {
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );

    if (filteredMovies.length > 0) {
      result[category] = filteredMovies;
    }
  });

  return result;
};
