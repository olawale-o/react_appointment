import React from 'react';
import style from './DoctorCard.module.css';

const DoctorCard = () => (
  <div className={style.card}>
    <div className={style.image}>
      <img src="https://images.pexels.com/photos/5234486/pexels-photo-5234486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="doctor" />
    </div>
    <h6 className={style.cardName}>Dr. John Doe</h6>
    <p className={style.cardDescription}>He is willing to treat you of all your diseases</p>
    <a href="/" className={style.cardLink}>See details</a>
  </div>
);

export default DoctorCard;
