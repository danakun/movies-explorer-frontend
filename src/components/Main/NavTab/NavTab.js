import React from 'react';
import './NavTab.css';

const NavTab = () => {
  return (
    <nav className='nav'>
      <div className='nav__content'>
        <ul className='nav__list'>
          <li className='nav-item'>
            <a href='#about-project' className='nav__link'>О проекте</a>
          </li>
          <li className='nav-item'>
            <a href='#techs' className='nav__link'>Технологии</a>
          </li>
          <li className='nav-item'>
            <a href='#about-me' className='nav__link'>Студент</a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export  default NavTab;
