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
import TimeCalendar from '../shared/TimeCalendar';

const New = () => {
  const [calendarDate, setCalendarDate] = useState(new Date());
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

  const updateDate = (direction) => {
    const newDate = new Date(calendarDate);
    if (direction === 'next') {
      newDate.setMonth(calendarDate.getMonth() + 1);
    } else {
      newDate.setMonth(calendarDate.getMonth() - 1);
    }
    setCalendarDate(newDate);
  };

  useEffect(() => {
    setDoctor(selectedDoctorIndex);
  }, []);

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
          <TimeCalendar
            fullDate={calendarDate}
            prevDate={() => updateDate('prev')}
            nextDate={() => updateDate('next')}
            setDate={setDate}
            appointmentDates={selectDoctor.appointments}
          />
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
