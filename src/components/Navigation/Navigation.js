import React, { useState } from 'react';
import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import BurgerMenu from './BurgerMenu/BurgerMenu';


const Navigation = ({ isAuthorized }) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const location = useLocation();
  const toggleBurgerMenuOpen = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <nav className="navigation">
      {isAuthorized ? (
        <>
          <div
            className= "navigation__movies"
          >
            <Link
              to="/movies"
              className={
                location.pathname === '/movies'
                  ? 'navigation__movies-link_active'
                  : 'navigation__movies-link'
              }
            >
              Фильмы
            </Link>
            <Link
              to="/saved-movies"
              className={
                location.pathname === '/saved-movies'
                  ? 'navigation__movies-link_active'
                  : 'navigation__movies-link'
              }
            >
              Сохраненные фильмы
            </Link>
          </div>
          <div className="profile-container">
            <Link to="/profile" className="navigation__profile" >
              Аккаунт <div className={
              location.pathname === '/'
                ? 'navigation__profile-picture'
                : 'navigation__profile-picture navigation__profile-picture_theme_white'
            }></div>
            </Link>
          </div>
        </>
      ) : (
        <div className="navigation__auth">
          <Link to="/signup" className="navigation__signup-link">
            Регистрация
          </Link>
          <Link to="/signin"
          className="navigation__signin-link">
            Войти
          </Link>
        </div>
      )}
      {isAuthorized && !isBurgerMenuOpen ? (
        <button
          className="navigation__burger"
          onClick={toggleBurgerMenuOpen}
        />
      ) : (
        <BurgerMenu onClose={toggleBurgerMenuOpen} isAuthorized={isAuthorized} />
      )}
    </nav>
  );
};

// Define PropTypes
Navigation.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
};

export default Navigation;


