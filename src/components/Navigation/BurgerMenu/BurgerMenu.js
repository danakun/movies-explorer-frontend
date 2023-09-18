import React from 'react';
import '../BurgerMenu/BurgerMenu.css'
import '../Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const BurgerMenu = ({ onClose, isAuthorized }) => {
  const location = useLocation();
  return (
    <div className={isAuthorized ? 'burger' : 'burger_hide'}>
      <div className="burger__bg">
        <div className="burger__container">
          <button
            type="button"
            className="burger__close-button"
            onClick={() => onClose()}
          />
          <div className="burger__menu">
            <Link
              to="/"
              className={
                location.pathname === '/'
                  ? 'burger__link_active'
                  : 'burger__link'
              }
            >
              Главная
            </Link>
            <Link
              to="/movies"
              className={
                location.pathname === '/movies'
                  ? 'burger__link_active'
                  : 'burger__link'
              }
            >
              Фильмы
            </Link>
            <Link
              to="/saved-movies"
              className={
                location.pathname === '/saved-movies'
                  ? 'burger__link_active'
                  : 'burger__link'
              }
            >
              Сохранённые фильмы
            </Link>
          </div>
          <Link to="/profile" className='to-profile'>
            <div className="burger__button-profile">Аккаунт
            <div className='navigation__profile-picture navigation__profile-picture_theme_white'></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;

BurgerMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};