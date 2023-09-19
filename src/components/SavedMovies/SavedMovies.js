import React from 'react';
import PropTypes from 'prop-types';
import { savedMovies } from '../../utils/constants';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';


const SavedMovies = () => {
  return (
    <>
      <main>
        <SearchForm />
        <MoviesCardList isSavedMoviesPage={true} movies={savedMovies} />
      </main>
    </>
  );
};

SavedMovies.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
};

export default SavedMovies;

