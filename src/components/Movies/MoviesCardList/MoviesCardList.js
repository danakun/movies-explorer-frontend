import React from 'react';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState } from 'react';
import PropTypes from 'prop-types';

const MoviesCardList = ({ isLoading = false, isSavedMoviesPage, movies, hasMore }) => {
  const [moviesLength, setMoviesLength] = useState(0);
  const [isMoreButton, setIsMoreButton] = useState(false);
  const { savedMovies } = useContext(CurrentUserContext);

  const loadMoreMovies = () => {
    if (window.innerWidth > 1041) setMoviesLength(moviesLength + 3);
    else {
      setMoviesLength(moviesLength + 2);
    }
  };

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
       {isMoreButton ?
      <button
        type="button"
        className=  //добавила новый класс more 'cards__button cards__button-more'
        {
          !isSavedMoviesPage ? 'cards__button' : 'cards__button-hidden'
        }
        onClick={loadMoreMovies}
      >
        Ещё
      </button>
      : ''}
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

// if moviesLength is smaller than movie api list length than show hasMore!!!
// (define how hasMore works) const [hasMore, setHasMore] = useState(apiFilms.hasMore());
// if hasMore - show button(setIsMoreButton -true)
//  if button is shown(isMoreButton) - onClick- loadMoreMovies
