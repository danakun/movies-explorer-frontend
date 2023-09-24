import React from 'react';
import './Movies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import { movies } from '../../utils/constants';
import { filterMovies, normalizeMovies } from '../../utils/utils';
 import { useEffect, useState } from 'react';
// import { useContext } from 'react';
// import CurrentUserContext from '../../contexts/CurrentUserContext';
//import { countCards } from '../../utils/countCards';
import MoviesApi from '../../utils/MoviesApi';
import Preloader from '../Movies/Preloader/Preloader';


const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [keyWord, setKeyWord] = useState('');
  // const [moviesLength, setMoviesLength] = useState(0);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const storageAllMovies = JSON.parse(localStorage.getItem('storageAllMovies')) || [];

  // const updateFilmsLine = (reset = false) => {
  //   const cardsCounter = countCards();
  //   let size = countCards.more;
  //   if (reset) {
  //     MoviesApi.resetCursor();
  //     size = cardsCounter.init;
  //   }
  // }


  useEffect(() => {
    const storageSearchResult = JSON.parse(localStorage.getItem('storageSearchResult')) || [];
    const storageKeyWord = localStorage.getItem('storageKeyWord') || '';
    const storageIsShort = JSON.parse(localStorage.getItem('storageIsShort')) || false;

    storageSearchResult && setSearchedMovies(storageSearchResult);
    storageKeyWord && setKeyWord(storageKeyWord);
    storageIsShort && setIsShortMovies(storageIsShort);
  }, []);

  const getFilteredMovies = (keyWord, isShortMovies) => {
    if (!storageAllMovies.length) {
      setIsLoading(true);
      MoviesApi.getMovies()
        .then((allMovies) => {
          const normalizedMovies = normalizeMovies(allMovies);
          localStorage.setItem('storageAllMovies', JSON.stringify(normalizedMovies));
          const filteredMovies = keyWord
            ? filterMovies(normalizedMovies, keyWord, isShortMovies)
            : [];
          handleFilterResult(filteredMovies);
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage(SearchMessage.SEARCH_ERROR);
        })
        .finally(() => setIsLoading(false));
    } else {
      const filteredMovies = keyWord
        ? filterMovies(storageAllMovies, keyWord, isShortMovies)
        : [];
      handleFilterResult(filteredMovies);
    }
  };

  const handleFilterResult = (movies) => {
    setSearchedMovies(movies);
    localStorage.setItem('storageSearchResult', JSON.stringify(movies));
    movies.length === 0
      ? setErrorMessage(SearchMessage.NOT_FOUND)
      : setErrorMessage('');
  }

  const handleSubmitSearch = (keyWord) => {
    setKeyWord(keyWord);
    localStorage.setItem('storageKeyWord', keyWord);
    getFilteredMovies(keyWord, isShortMovies);
  };

  const handleChangeCheckbox = (isChecked) => {
    setIsShortMovies(isChecked);
    localStorage.setItem('storageIsShort', isChecked);
    getFilteredMovies(keyWord, isChecked);
  };

  const renderMoviesSection = () => {
    if (errorMessage.length) {
      return <p className='cards__search-message'>{errorMessage}</p>;
    }
    return (
      <MoviesCardList movies={searchedMovies} />
    )
  };

  return (
    <>
      <main>
        <SearchForm
        handleSubmitSearch={handleSubmitSearch}
        handleChangeCheckbox={handleChangeCheckbox}
        showError={setErrorMessage}
        isLoading={isLoading}
        />
       {isLoading ? <Preloader />
       : <MoviesCardList isSavedMoviesPage={false} movies={movies} />}
      </main>
    </>
  );
};

export default Movies;
