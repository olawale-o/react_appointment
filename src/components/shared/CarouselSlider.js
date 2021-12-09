import React from 'react';
import PropType from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DoctorCard from './DoctorCard';

const CarouselSlider = ({ doctors }) => {
  const doctorList = doctors.map((doctor) => (<DoctorCard key={doctor.id} doctor={doctor} />));
  return (
    <div className="slider" style={{ width: '100%' }}>
      <Slider slidesToShow={1} infinite={false}>{doctorList}</Slider>
    </div>
  );
};

export default CarouselSlider;

CarouselSlider.propTypes = {
  doctors: PropType.arrayOf(PropType.shape({
    id: PropType.number,
    fullname: PropType.string,
  })).isRequired,
};
