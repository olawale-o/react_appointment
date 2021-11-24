import React from 'react';
import CarouselSlider from '../shared/CarouselSlider';

const List = () => (
  <div className="doctor__list" style={{ overflowX: 'hidden' }}>
    <div className="home__header">
      <h1 className="heading1">OUR RECENT DOCTORS</h1>
      <h5 className="heading5">Pick a Doctor for an Appointment!</h5>
    </div>
    <CarouselSlider />
  </div>
);

export default List;
