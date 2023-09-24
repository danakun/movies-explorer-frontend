import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import {  useLocation } from 'react';

import './App.css';

import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import InfoToolTip from '../InfoToolTip/InfoToolTip';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import Preloader from '../Movies/Preloader/Preloader';
import { ROUTE } from '../../utils/constants'
import ProtectedRoute from '../ProtectedRoute';
import MainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { AppMessage } from '../../utils/constants'

function App() {
  const navigate = useNavigate();
  // const location = useLocation();

  // const isKnownRoute = location.pathname !== ROUTE.NOT_FOUND;
  // const isLocationSign = location.pathname.includes('/sign');
  // const isLocationProfile = location.pathname === ROUTE.PROFILE;

  const [isAuthorized, setIsAuthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isInfoToolTipPopupOpen, setInfoToolTipPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tooltipSettings, setTooltipSettings] = useState({
    message: '',
    isSuccess: false,
  });
// useEffect -проверка токена перед логином
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      MainApi
        .checkToken(jwt)
        .then((res) => {
          setCurrentUser(res);
          setIsAuthorized(true);
        })
        .catch((err) => {
          console.log(err);
          signOut();
        });
    } else setIsAuthorized(false);
  }, [navigate]);

  // useEffect -fetch and manage user data nd saved movies when logged in
  useEffect(() => {
    if (isAuthorized) {
      MainApi.setToken();
      Promise.all([MainApi.getUserInfo(), MainApi.getSavedMovies()])
        .then(([me, apiSavedMovies]) => {
          setCurrentUser(me);
          setSavedMovies(apiSavedMovies.filter((film) => film.owner === me._id));
        })
        .catch(async (err) => {
          const { message } = await err.json();
          setTooltipSettings({
            message,
            isSuccess: false,
          });
          setInfoToolTipPopupOpen(true);
        })
        .finally(() => {})
    }
  }, [isAuthorized]);

 // sign up, регистрация пользователя
 const handleRegister = (name, email, password) => {
  setIsLoading(true);
  MainApi
    .register(name, email, password)
    .then(() => {
      handleLogin(email, password);
    })
    .catch(async (err) => {
      const { message } = await err.json();
      setTooltipSettings({
        message,
        isSuccess: false,
      });
      setInfoToolTipPopupOpen(true)
    })
    .finally(() => {
      setIsLoading(false);
    });
}

  // sign in, войти в профиль
  const handleLogin = (email, password) => {
    setIsLoading(true);
    MainApi
      .login(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setIsAuthorized(true);
        setTooltipSettings({
          message: AppMessage.SUCCESS,
          isSuccess: true,
        });
        setInfoToolTipPopupOpen(true);
      })
      .catch(async (err) => {
        const { message } = await err.json();
        setTooltipSettings({
          message,
          isSuccess: false,
        });
        setInfoToolTipPopupOpen(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // выход из профиля
  const signOut = () => {
    localStorage.clear();
    isAuthorized(false);
    setCurrentUser({});
    setSavedMovies([]);
    setIsLoading(false);
    closeAllPopups();
    navigate('/');
  }

 // const isAuthorized = false;
// const isInfoToolTipPopupOpen = false;
  const closeAllPopups = () => {
    setInfoToolTipPopupOpen(false);
    setIsMenuOpen(false);
  }

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  };

  return (
    <CurrentUserContext.Provider
    value={{currentUser, setCurrentUser, savedMovies, setSavedMovies}}
  >
    <div className="App">

    <Routes>
    <Route
      path="/"
      element={
        <>
        <Header
          authorized={isAuthorized}
          isMenuOpen = {isMenuOpen}
          handleOverlayClick={handleOverlayClick}
          setIsMenuOpen ={setIsMenuOpen}
        />
        <Main authorized={isAuthorized} />
        <Footer />
      </>
      }
    />

    <Route
      path="/profile"
      element={
        <ProtectedRoute isAuthorized={isAuthorized}
        >
        <Header
          authorized={isAuthorized}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          handleOverlayClick={handleOverlayClick}
        />
        <Profile
        authorized={isAuthorized}
        signOut={signOut}
        setTooltipSettings={setTooltipSettings}
        setInfoToolTipPopupOpen={setInfoToolTipPopupOpen}
         />
        <Footer />
      </ProtectedRoute>
      }
    />

    <Route
      path="/movies"
      element={
        <ProtectedRoute isAuthorized={isAuthorized}>
        <Header
          authorized={isAuthorized}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          handleOverlayClick={handleOverlayClick}
        />
        <Movies authorized={isAuthorized} />
        <Footer />
      </ProtectedRoute>
      }
    />

    <Route
      path="/saved-movies"
      element={
        <ProtectedRoute isAuthorized={isAuthorized}>
        <Header
          authorized={isAuthorized}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          handleOverlayClick={handleOverlayClick}
        />
        <SavedMovies authorized={isAuthorized} />
        <Footer />
      </ProtectedRoute>
      }
    />

    <Route
      path={ROUTE.SIGNUP}
      element={
        isAuthorized ?
        <Navigate to='/movies' />
        :
        <Register handleRegister={handleRegister} isLoading={isLoading} />}
    />

    <Route
      path="/signin"
      element={
        isAuthorized ?
        <Navigate to='/movies' />
        :
        <Login handleLogin={handleLogin} isLoading={isLoading} />}
    />

    <Route
      path="*"
      element={<NotFound />}
    />
  </Routes>

  <InfoToolTip
        isOpen={isInfoToolTipPopupOpen}
        onClose={closeAllPopups}
        tooltipSettings={tooltipSettings}
        onOverlayClick={handleOverlayClick}
        />
  </div>
  </CurrentUserContext.Provider>
  );
}

export default App;

