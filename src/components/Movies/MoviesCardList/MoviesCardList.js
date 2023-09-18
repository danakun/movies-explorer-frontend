import React from 'react';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import PropTypes from 'prop-types';

const MoviesCardList = ({ isLoading = false, isSavedMoviesPage, movies }) => {
  return (
    <section className="cards limits-container">
      {isLoading ? (
        <Preloader />
      ) : (
        <ul className="cards__list">
          {movies.map((movie) => {
            return (
              <MoviesCard
                key={movie.id}
                movie={movie}
                isSavedMoviesPage={isSavedMoviesPage}
              />
            );
          })}
        </ul>
      )}
      <button
        type="button"
        className={
          !isSavedMoviesPage ? 'cards__button' : 'cards__button_hidden'
        }
      >
        Ещё
      </button>
    </section>
  );
};

// Define PropTypes
MoviesCardList.propTypes = {
  isLoading: PropTypes.bool,
  isSavedMoviesPage: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      saved: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default MoviesCardList;