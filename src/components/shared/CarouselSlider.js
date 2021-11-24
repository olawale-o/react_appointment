import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DoctorCard from './DoctorCard';

const CarouselSlider = () => (
  <div className="slider" style={{ width: '100%' }}>
    <Slider slidesToShow={2}>
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
    </Slider>
  </div>
);

export default CarouselSlider;
