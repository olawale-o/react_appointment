import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import styles from './navigation.module.css';
import LogoutModal from '../shared/LogoutModal';
import authSelector from '../../redux/auth/auth_selector';
import { logout } from '../../redux/auth/auth_async_actions';

const Navigation = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(authSelector);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleMenu = isOpen ? styles.showNav : '';
  const toggleHeader = isOpen ? styles.showHeader : '';
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const onOpen = () => {
    setOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const onClose = () => {
    document.body.removeAttribute('style');
    setOpen(false);
  };

  const onConfirm = () => {
    dispatch(logout());
    onClose();
  };

  return (
    <>
      <button
        type="button"
        className={styles.menu}
        onClick={toggleNav}
      >
        {
          isOpen
            ? <i className="bx bx-x" />
            : <i className="bx bx-menu" />
        }
      </button>
      <div className={`${styles.Navigation} ${toggleHeader}`}>
        <nav className={`${styles.nav} ${toggleMenu}`}>
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
            {/* <li className={styles.navItem}>
              <NavLink to="/appointment/new" className={styles.navLink}>BOOK APPOINTMENT</NavLink>
            </li> */}
            <li className={styles.navItem}>
              <NavLink to="/appointment/all" className={styles.navLink}>MY APPOINTMENTS</NavLink>
            </li>
            <li className={styles.navItem}>
              <Link to="/doctor/all" className={styles.navLink}>DELETE A DOCTOR</Link>
            </li>
            <li className={styles.navItem}>
              <button type="button" className={styles.logOutBtn} onClick={onOpen}>LOG OUT</button>
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
        <LogoutModal
          isOpen={open}
          setOpen={setOpen}
          onClose={onClose}
          isLoading={isLoading}
          onConfirm={onConfirm}
        />
      </div>
    </>
  );
};

export default Navigation;
