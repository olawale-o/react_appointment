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
          <NavLink to="/doctor/new" activeclassname="active" className={styles.navLink}>ADD A DOCTOR</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/appointment/new" className={styles.navLink}>BOOK APPOINTMENT</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/appointment/all" className={styles.navLink}>MY APPOINTMENTS</NavLink>
        </li>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>DELETE A DOCTOR</a>
        </li>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>LOG OUT</a>
        </li>
      </ul>
      <div className={styles.footerNav}>
        <ul className={styles.socials}>
          <li className={styles.socialItem}>
            <a href="/#" className={styles.socialLink}>
              <i className="bx bxl-facebook" />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="/#" className={styles.socialLink}>
              <i className="bx bxl-twitter" />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="/#" className={styles.socialLink}>
              <i className="bx bxl-pinterest-alt" />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="/#" className={styles.socialLink}>
              <i className="bx bxl-google-plus" />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="/#" className={styles.socialLink}>
              <i className="bx bxl-vimeo" />
            </a>
          </li>
        </ul>
        <p className={styles.copyright}>
          &copy; 2021 Microverse
        </p>
      </div>
    </nav>
  </div>
);

export default Navigation;
