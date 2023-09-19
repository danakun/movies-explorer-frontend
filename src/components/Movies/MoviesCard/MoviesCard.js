import React from 'react';
import './MoviesCard.css';
import PropTypes from 'prop-types';


const MoviesCard = ({ isSavedMoviesPage, movie }) => {
  return (
    <li className="item">
      <div className="card">
        <img
          className="card__image"
          src={movie.image}
          alt={`Обложка: ${movie.name}`}
        />
        <div className="card__description">
          <span className="card__name">{movie.name}</span>
          <span className="card__duration">{movie.duration}</span>
        </div>
        {movie.saved && !isSavedMoviesPage && (
          <button type="button" className="card__button-saved" />
        )}
        {isSavedMoviesPage ? (
          <button type="button" className="card__button-delete" />
        ) : (
          <button type="button" className="card__button">Сохранить</button>
        )}
      </div>
    </li>
  );
};

// Define PropTypes
MoviesCard.propTypes = {
  isSavedMoviesPage: PropTypes.bool.isRequired,
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    saved: PropTypes.bool.isRequired,
  }).isRequired,
};


export default MoviesCard;