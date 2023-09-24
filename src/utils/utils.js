import { IMAGES_URL, HTTP_REGEX } from './constants';
// SHORT_FILM_DURATION,

export const convertMinToHours = (num) => {
  const minutes = num % 60;
  const hours = (num - minutes) / 60;
  if (hours === 0) {
    return `${minutes}м`;
  } else if (minutes === 0) {
    return `${hours}ч`;
  } else {
    return `${hours}ч ${minutes}м`;
  }
};

export function filterShorts(movies) {
  return movies.filter((movie) => movie.duration < 40);
}

export function filterMovies(movies, userQuery, shortMoviesCheckbox) {
  const moviesByUserQuery = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userMovie = userQuery.toLowerCase().trim();
    return (
      movieRu.indexOf(userMovie) !== -1 || movieEn.indexOf(userMovie) !== -1
    );
  });
  if (shortMoviesCheckbox) {
    return filterShorts(moviesByUserQuery);
  } else {
    return moviesByUserQuery;
  }
}

export const checkSavedCard = (moviesList, movie) => {
  return moviesList.find((item) => {
    return item.movieId === (movie.id || movie.movieId);
  });
};

export const normalizeMovies = (movies) => {
  return movies
    .map((movie) => ({
        country: movie.country || 'unknown',
        director: movie.director || 'unknown',
        duration: movie.duration || 60,
        year: movie.year || 2000,
        description: movie.description || 'unknown',
        image: `${IMAGES_URL}/${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${IMAGES_URL}/${movie.image.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU || 'unknown',
        nameEN: movie.nameEN || 'unknown',
      }))
    .map((movie) => (
      HTTP_REGEX.test(movie.trailerLink) ? movie : {...movie, trailerLink: movie.image}
    ));
};