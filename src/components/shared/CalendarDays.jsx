import PropType from 'prop-types';

import { format } from 'date-fns';
// import { bookings } from './data';
// import style from './TimeCalendar.module.css';

// const isBooked = (day) => bookings.includes(day.getTime());

const CalendarDays = ({ days }) => (
  <>
    {days.map((day) => (
      <li
        key={day}
      >
        {format(day, 'd')}
      </li>
    ))}
  </>
);

export default CalendarDays;

CalendarDays.propTypes = {
  days: PropType.arrayOf(Date).isRequired,
};
