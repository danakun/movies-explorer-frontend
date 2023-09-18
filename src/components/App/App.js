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
import InfoTooltip from '../InfoToolTip/InfoToolTip';

function App() {
  const navigate = useNavigate();
  //const [isAuthorized, setIsAuthorized] = useState(false);
  // const [isAuthorized, setisAuthorized] = useState(true);
  const isAuthorized = false;
const isInfoTooltipPopupOpen = false;
  // const closeAllPopups = () => {
  //   setInfoTooltipPopupOpen(false);
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
      element={<Main authorized={isAuthorized} />}
    />

    <Route
      path="/profile"
      element={<Profile
        authorized={isAuthorized}
        signOut={signOut}
         />}
    />

    <Route
      path="/movies"
      element={<Movies authorized={isAuthorized} />} // authorized={isAuthtorized}
    />

    <Route
      path="/saved-movies"
      element={<SavedMovies authorized={isAuthorized} />}
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

  <InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
        // onClose={closeAllPopups}
        //   tooltipSettings={tooltipSettings}
        //   onOverlayClick={handleOverlayClick}
        />
  </div>
  );
}

export default App;

