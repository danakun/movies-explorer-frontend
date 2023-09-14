import React from 'react';
import './Movies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import { movies } from '../../utils/constants';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Movies = () => {
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList isSavedMoviesPage={false} movies={movies} />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
