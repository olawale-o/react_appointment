import React from 'react';
import PropType from 'prop-types';
import style from './DoctorCard.module.css';

const DoctorCard = ({ doctor }) => (
  <div className={style.card}>
    <div className={style.image}>
      <img src={`http://localhost:3000${doctor.picture}`} alt="doctor" />
    </div>
    <h6 className={style.cardName}>{`Dr. ${doctor.fullname}`}</h6>
    <p className={style.cardDescription}>{doctor.specialty}</p>
    <a href="/" className={style.cardLink}>See details</a>
  </div>
);

export default DoctorCard;

DoctorCard.propTypes = {
  doctor: PropType.shape({
    fullname: PropType.string.isRequired,
    picture: PropType.string.isRequired,
    specialty: PropType.string.isRequired,
  }).isRequired,
};
