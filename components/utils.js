import { MOVIES } from '../constants/movies';
import _ from 'lodash';

export const getMovieCategories = (movies) => {
  return _.uniq(_.map(movies, 'category'));
};

// TODO:: getMoviesById
export const getMoviesByIds = (movies, movieIds) => {
  return movies.filter((movie) => {
    return movieIds.includes(movie.id);
  });
};

export const getMovieById = (movies, id) => {
  return movies.find((currentMovie) => currentMovie.id === id);
};

export const filterMoviesByCategory = (movies, category) => {
  return movies.filter((movie) => movie.category === category);
};

export const filterMoviesByQuery = (movies, search) => {
  return movies.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });
};
