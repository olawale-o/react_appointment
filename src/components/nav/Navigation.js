import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './navigation.module.css';

const Navigation = () => (
  <div className={styles.Navigation}>
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink} activeclassname="active">Book A Doctor</Link>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink to="/" className={styles.navLink} activeclassname="active">MEET OUR DOCTORS</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/add-a-doctor" activeclassname="active" className={styles.navLink}>ADD A DOCTOR</NavLink>
        </li>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>BOOK APPOINTMENT</a>
        </li>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>MY BOOKINGS</a>
        </li>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>DELETE A DOCTOR</a>
        </li>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>LOG OUT</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
