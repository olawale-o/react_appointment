import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import doctorsSelector from '../../redux/doctors/doctor_selector';
import { createAppointment } from '../../redux/appointments/appointment_async_action';
import appointmentSelector from '../../redux/appointments/appointment_selector';

const New = () => {
  const dispatch = useDispatch();
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const { doctors } = useSelector(doctorsSelector);
  const { message, loading } = useSelector(appointmentSelector);
  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      appointment: {
        doctor_id: doctor,
        book_for: date,
      },
    };
    dispatch(createAppointment(credentials));
  };

  const doctorOptions = doctors.map((doctor) => (
    <option key={doctor.id} value={doctor.id}>{doctor.fullname}</option>
  ));

  return (
    <div className="booking__new">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1 className="heading1 mb-2" style={{ color: '#fff' }}>BOOK AN APPOINTMENT</h1>
          {message && <p className="message">{message}</p>}
          <div className="field">
            <select
              onChange={(e) => setDoctor(e.target.value)}
              value={doctor}
              required
            >
              <option>Select a doctor</option>
              {doctorOptions}
            </select>
          </div>
          <div className="field">
            <input
              type="datetime-local"
              className="input"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              required
            />
          </div>
          <div className="actions">
            {loading
              ? <div className="form__submission-indicator" />
              : <input type="submit" value="Book" className="btn addBtn" />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default New;
