import React from 'react';
import { DateTime } from 'luxon';
import PropType from 'prop-types';

const AppointmentCard = ({ appointment }) => (
  <>
    <div className="appointment__item">
      <div className="appointment__info">
        <img
          src={`http://localhost:3000${appointment.picture}`}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
          alt="appointment"
        />
        <span className="fs-3">{appointment.fullname}</span>
      </div>
      <div className="appointment__city">
        <span className="fs-3">{appointment.city}</span>
      </div>
      <div className="appointment__specialty">
        <span className="fs-3">{appointment.specialty}</span>
      </div>
      <div className="appointment__date">
        <span className="fs-3">{DateTime.fromISO(appointment.appointment_date).toFormat('yyyy-LL-dd')}</span>
      </div>
      <span className="fs-6">
        <i className="bx bxs-trash-alt" />
      </span>
    </div>
    <div className="divider" />
  </>
);

export default AppointmentCard;

AppointmentCard.propTypes = {
  appointment: PropType.shape({
    id: PropType.number,
    fullname: PropType.string,
    specialty: PropType.string,
    city: PropType.string,
    appointment_date: PropType.string,
    picture: PropType.string,
  }).isRequired,
};
