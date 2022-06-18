import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectDoctors,
  selectDoctorById,
  selectDoctorToBook,
} from '../../redux/doctors/doctor_selector';
import {
  createAppointment,
} from '../../redux/appointments/appointment_async_action';
import {
  selectAppointmentsLoading,
  selectAppointmentsMessage,
} from '../../redux/appointments/appointment_selector';

const New = () => {
  const dispatch = useDispatch();
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const doctors = useSelector(selectDoctors);
  const message = useSelector(selectAppointmentsMessage);
  const loading = useSelector(selectAppointmentsLoading);
  const selectedDoctorIndex = useSelector(selectDoctorToBook);
  const selectDoctor = useSelector(selectDoctorById(Number(selectedDoctorIndex)));

  const doctorOptions = doctors.map((doctorId) => {
    const doctor = useSelector(selectDoctorById(doctorId));
    return (
      <option
        key={doctor.id}
        value={doctor.id}
      >
        {doctor.fullname}
      </option>
    );
  });

  useEffect(() => {
    setDoctor(selectedDoctorIndex);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      appointment: {
        doctor_id: doctor,
        book_for: date,
      },
    };
    dispatch(createAppointment(credentials));
    setDoctor('');
    setDate('');
  };

  return (
    <div className="booking__new">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1 className="heading1 mb-2" style={{ color: '#fff' }}>BOOK AN APPOINTMENT</h1>
          {message && <p className="message">{message}</p>}
          <div className="field">
            <select
              defaultValue={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              disabled={selectDoctor}
              required
            >
              <option
                value={doctor}
              >
                {selectedDoctorIndex ? selectDoctor.fullname : 'Choose a doctor'}
              </option>
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
