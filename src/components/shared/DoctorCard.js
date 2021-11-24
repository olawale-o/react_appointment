import React from 'react';

const DoctorCard = () => (
  <div className="card">
    <div className="image">
      <img src="https://images.pexels.com/photos/5234486/pexels-photo-5234486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="doctor" />
    </div>
    <h6 className="card__name">Dr. John Doe</h6>
    <p className="card__description">He is willing to treat you of all your diseases</p>
    <a href="/" className="card__link">See details</a>
  </div>
);

export default DoctorCard;
