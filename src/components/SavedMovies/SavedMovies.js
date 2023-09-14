import React from 'react';
import PropTypes from 'prop-types';
import { savedMovies } from '../../utils/constants';
import Header from '../Header/Header';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';

const SavedMovies = ({ isAuthorized }) => {
  return (
    <>
      <Header isAuthorized={isAuthorized} />
      <main>
        <SearchForm />
        <MoviesCardList isSavedMoviesPage={true} movies={savedMovies} />
      </main>
      <Footer />
    </>
  );
};

SavedMovies.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
};

export default SavedMovies;

