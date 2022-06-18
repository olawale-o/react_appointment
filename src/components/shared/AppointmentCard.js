import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DateTime } from 'luxon';
import PropType from 'prop-types';
import { removeAppointment } from '../../redux/appointments/appointment_async_action';
import { selectAppointmentsById } from '../../redux/appointments/appointment_selector';
import BASE_URI from '../../constants/url';

const AppointmentCard = ({ appointmentId }) => {
  const dispatch = useDispatch();
  const appointment = useSelector(selectAppointmentsById(appointmentId));
  const onDelete = (id) => {
    dispatch(removeAppointment(id));
  };
  return (
    <>
      <div className="table__row">
        <div className="info">
          <img
            src={`${BASE_URI}${appointment.doctor.picture}`}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
            alt="appointment"
          />
          <span className="fs-3">{appointment.doctor.fullname}</span>
        </div>
        <div className="city">
          <span className="fs-3 bold xs">City: </span>
          <span className="fs-3">{appointment.doctor.city}</span>
        </div>
        <div className="specialty">
          <span className="fs-3 bold xs">Specialty: </span>
          <span className="fs-3">{appointment.doctor.specialty}</span>
        </div>
        <div className="date">
          <span className="fs-3 bold xs">Appointment Date: </span>
          <span className="fs-3">{DateTime.fromISO(appointment.appointment_date).toFormat('yyyy-LL-dd')}</span>
        </div>
        <span className="fs-6">
          <button
            onClick={() => onDelete(appointment.id)}
            type="button"
            className="btn"
          >
            <i className="bx bx-x" />
          </button>
        </span>
      </div>
      <div className="divider" />
    </>
  );
};

export default AppointmentCard;

AppointmentCard.propTypes = {
  appointmentId: PropType.number.isRequired,
};
