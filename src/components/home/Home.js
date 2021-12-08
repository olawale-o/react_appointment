import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../nav/Navigation';
import style from './home.module.css';

const Home = () => (
  <div className={style.home}>
    <Navigation />
    <div className={style.child}>
      <Outlet />
    </div>
  </div>
);

export default Home;
