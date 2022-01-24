import React from 'react';
import PropType from 'prop-types';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DoctorCard from './DoctorCard';
import { selectDoctorById } from '../../redux/doctors/doctor_selector';

const CarouselSlider = ({ doctors }) => {
  const doctorList = doctors.map((doctor) => {
    const doctorById = useSelector((selectDoctorById(String(doctor))));
    return <DoctorCard key={doctorById.id} doctor={doctorById} />;
  });
  return (
    <div className="slider" style={{ width: '100%' }}>
      <Slider
        responsive={[
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
        slidesToShow={2}
        infinite={false}
      >
        {doctorList}
      </Slider>
    </div>
  );
};

export default CarouselSlider;

CarouselSlider.propTypes = {
  doctors: PropType.arrayOf(PropType.number).isRequired,
};
