import React from 'react';
import './Movies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import { movies } from '../../utils/constants';

const Movies = () => {
  return (
    <>
      <main>
        <SearchForm />
        <MoviesCardList isSavedMoviesPage={false} movies={movies} />
      </main>
    </>
  );
};

export default Movies;
