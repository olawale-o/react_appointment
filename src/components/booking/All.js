import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import appointmentSelector from '../../redux/appointments/appointment_selector';
import { getAppointments } from '../../redux/appointments/appointment_async_action';
import AppointmentList from '../shared/AppointmentList';

const All = () => {
  const dispatch = useDispatch();
  const { appointments, loading } = useSelector(appointmentSelector);
  useEffect(() => {
    dispatch(getAppointments());
  }, []);

  return (
    <div className="Appointments" style={{ background: 'whitesmoke', minHeight: '700px', paddingTop: '10rem' }}>
      <div className="table__container">
        {loading && <div className="loading__indicator" />}
        { appointments.length > 0
          && (
            <>
              <h1 className="heading1">My Appointments</h1>
              <AppointmentList appointments={appointments} />
            </>
          )}
        { appointments.length === 0 && (<div style={{ fontSize: '3rem', textAlign: 'center' }}>No appointments yet</div>) }
      </div>
    </div>
  );
};

export default All;
