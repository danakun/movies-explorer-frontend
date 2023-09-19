import React from 'react';

import './Main.css';
import  Promo  from './Promo/Promo';
// import  NavTab from './NavTab/NavTab'
import  AboutProject  from './AboutProject/AboutProject';
import  Techs  from './Techs/Techs';
import  AboutMe  from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';

export const Main = () => ( //{ onClickAuth }
  <main className="main">
    <Promo />
    <AboutProject />
    <Techs />
    <AboutMe />
    <Portfolio />
  </main>
);

export default Main