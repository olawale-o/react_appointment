import PropType from 'prop-types';
import range from '../../lib/range';
import style from './TimeCalendar.module.css';

const CalendarNextDays = ({ lastDayOfMonth }) => {
  const nextDays = range(lastDayOfMonth, 5, 1);
  return (
    <>
      {nextDays.map((day) => (
        <li key={day} className={style.inactive}>{day - lastDayOfMonth + 1}</li>))}
    </>
  );
};

export default CalendarNextDays;

CalendarNextDays.propTypes = {
  lastDayOfMonth: PropType.number.isRequired,
};
