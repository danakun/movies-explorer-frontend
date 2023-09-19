import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import PropTypes from 'prop-types';

const Header = ({ isAuthorized }) => {
  const location = useLocation();
  const isMainRoute = location.pathname === '/';

  return (
    <header className={`header${isMainRoute ? ' header_theme_pink' : ' header_theme_white'}`}>
      <div className='header__container limits-container'>
        <Link to="/">
          <img src={logo} alt="Логотип" className="header__logo" />
        </Link>
        <Navigation isAuthorized={isAuthorized}/>
      </div>
    </header>
  );
};  //isAuthorized={isAuthorized}

export default Header;

// Define PropTypes
Header.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
};
