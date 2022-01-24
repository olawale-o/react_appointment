import React from 'react';
import PropType from 'prop-types';
import DoctorItemCard from './DoctorItemCard';

const DoctorList = ({ doctors }) => (
  <div className="table">
    {doctors.map((doctor) => <DoctorItemCard key={doctor} doctorId={doctor} />)}
  </div>
);
export default DoctorList;

DoctorList.propTypes = {
  doctors: PropType.arrayOf(PropType.number).isRequired,
};
