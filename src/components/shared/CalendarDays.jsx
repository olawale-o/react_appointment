import PropType from 'prop-types';

import { format, isPast, isToday } from 'date-fns';
// import { bookings } from './data';
// import style from './TimeCalendar.module.css';

// const isBooked = (day) => bookings.includes(day.getTime());

const CalendarDays = ({ days, setDate }) => (
  <>
    {days.map((day) => (
      <li
        key={day}
      >
        <button
          type="button"
          className="date-button"
          disabled={isPast(day) && !isToday(day)}
          onClick={() => { setDate(day); }}
        >
          {format(day, 'd')}
        </button>
      </li>
    ))}
  </>
);

export default CalendarDays;

CalendarDays.propTypes = {
  days: PropType.arrayOf(Date).isRequired,
  setDate: PropType.func.isRequired,
};
