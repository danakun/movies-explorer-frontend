import React from 'react';
// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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

function App() {
  const navigate = useNavigate();
  //const [isAuthorized, setIsAuthorized] = useState(false);
  // const [isAuthorized, setisAuthorized] = useState(true);
  const isAuthorized = false;
const isInfoToolTipPopupOpen = false;
  // const closeAllPopups = () => {
  //   setInfoToolTipPopupOpen(false);
  //   setIsMenuOpen(false);
  // }


  const signOut = () => {
    localStorage.clear();
    //isAuthorized(false);
    // setCurrentUser({});
    // setSavedMovies([]);
    // setIsLoading(false);
    // closeAllPopups();
    navigate('/');
  }

  return (
    <div className="App">

    <Routes>
    <Route
      path="/"
      element={
        <>
        <Header
          authorized={isAuthorized}
        />
        <Main authorized={isAuthorized} />
        <Footer />
      </>
      }
    />

    <Route
      path="/profile"
      element={
        <>
        <Header
          authorized={isAuthorized}
        />
        <Profile
        authorized={isAuthorized}
        signOut={signOut}
         />
        <Footer />
      </>
      }
    />

    <Route
      path="/movies"
      element={
        <>
        <Header
          authorized={isAuthorized}
        />
        <Movies authorized={isAuthorized} />
        <Footer />
      </>
      }
    />

    <Route
      path="/saved-movies"
      element={
        <>
        <Header
          authorized={isAuthorized}
        />
        <SavedMovies authorized={isAuthorized} />
        <Footer />
      </>
      }
    />

    <Route
      path="/signup"
      element={<Register />}
    />

    <Route
      path="/signin"
      element={<Login />}
    />

    <Route
      path="*"
      element={<NotFound />}
    />
  </Routes>

  <InfoToolTip
          isOpen={isInfoToolTipPopupOpen}
        // onClose={closeAllPopups}
        //   tooltipSettings={tooltipSettings}
        //   onOverlayClick={handleOverlayClick}
        />
  </div>
  );
}

export default App;

