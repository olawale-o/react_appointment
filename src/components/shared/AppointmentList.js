import React from 'react';
import PropType from 'prop-types';
import AppointmentCard from './AppointmentCard';

const AppointmentList = ({ appointments }) => {
  const appointmentList = appointments?.map((appointment) => (
    <AppointmentCard key={appointment.id} appointment={appointment} />
  ));
  return (
    <div className="table">
      {appointmentList}
    </div>
  );
};

export default AppointmentList;

AppointmentList.propTypes = {
  appointments: PropType.arrayOf(PropType.shape({
    id: PropType.number,
    fullname: PropType.string,
    specialty: PropType.string,
    city: PropType.string,
    appointment_date: PropType.string,
    picture: PropType.string,
  })).isRequired,
};
