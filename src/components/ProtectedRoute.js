import React from 'react';
import {Navigate, Link} from 'react-router-dom';
import Preloader from '../components/Movies/Preloader/Preloader';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ isAuthorized, children }) => {
  if (!isAuthorized) {
    return (
      <>
        <Preloader />
        <Link to='/' className='preloader-link'>На главную</Link>
      </>
    )
  }

  return isAuthorized ? children : <Navigate to='/' />
}


// Define PropTypes
ProtectedRoute.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};


export default ProtectedRoute;


