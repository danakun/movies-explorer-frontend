import React from 'react';
import '../NotFound/NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className='main main-nf'>
      <div className="not-found">
        <div className="not-found__info-container">
          <span className="not-found__code">404</span>
          <h1 className="not-found__code-description">Страница не найдена</h1>
          <Link to="/" className="not-found__link">
          Назад
        </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;