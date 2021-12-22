import React from 'react';
import PropType from 'prop-types';
import AppointmentCard from './AppointmentCard';

const AppointmentList = ({ appointments }) => (
  <div className="table">
    {appointments.map((appointment) => (
      <AppointmentCard key={appointment} appointmentId={appointment} />
    ))}
  </div>
);

export default AppointmentList;

AppointmentList.propTypes = {
  appointments: PropType.arrayOf(PropType.number).isRequired,
};
