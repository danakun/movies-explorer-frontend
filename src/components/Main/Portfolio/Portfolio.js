import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio limits-container">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__projects">
        <li>
          <a
            className="portfolio__link"
            target="_blank"
            href="https://64f7e35c9d6a7a24bdb4f27a--superlative-cactus-b40829.netlify.app/"
            rel="noreferrer"
          >
            Статичный сайт
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>
        <li>
          <a
            className="portfolio__link"
            target="_blank"
            href="https://danakun.github.io/russian-travel/"
            rel="noreferrer"
          >
            Адаптивный сайт
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>
        <li>
          <a
            className="portfolio__link"
            target="_blank"
            href="https://danakun.nomoreparties.co/sign-in"
            rel="noreferrer"
          >
            Одностраничное приложение
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;