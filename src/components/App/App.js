import React from 'react';
// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

function App() {
  // const [isAuthtorized, setisAuthtorized] = useState(true);
  const isAuthtorized = false;
  return (
    <div className="App">

    <Routes>
    <Route
      path="/"
      element={<Main authorized={isAuthtorized} />} //authorized={isAuthtorized}
    />

    <Route
      path="/profile"
      element={<Profile authorized={isAuthtorized} />} // authorized={isAuthtorized}
    />

    <Route
      path="/movies"
      element={<Movies authorized={isAuthtorized} />} // authorized={isAuthtorized}
    />

    <Route
      path="/saved-movies"
      element={<SavedMovies authorized={isAuthtorized} />} // authorized={isAuthtorized}
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

  </div>
  );
}

export default App;

