import React from 'react';
import PropType from 'prop-types';
import DoctorItemCard from './DoctorItemCard';

const DoctorList = ({ doctors }) => {
  const doctorList = doctors?.map((doctor) => (
    <DoctorItemCard key={doctor.id} doctor={doctor} />
  ));
  return (
    <div className="table">
      {doctorList}
    </div>
  );
};

export default DoctorList;

DoctorList.propTypes = {
  doctors: PropType.arrayOf(PropType.shape({
    id: PropType.number,
    fullname: PropType.string,
    specialty: PropType.string,
    city: PropType.string,
    picture: PropType.string,
  })).isRequired,
};
