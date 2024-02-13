import PropType from 'prop-types';
import range from '../../lib/range';
import style from './TimeCalendar.module.css';

const CalendarPreviousDays = ({ firstDayOfTheMonth, lastDateOfLastMonth }) => {
  const prevDays = range(firstDayOfTheMonth, 1, -1);
  return (
    <>
      {prevDays.map((day) => (
        <li key={day} className={style.inactive}>
          <button type="button" className="date-button" disabled>{lastDateOfLastMonth - day + 1}</button>
        </li>
      ))}
    </>
  );
};

export default CalendarPreviousDays;

CalendarPreviousDays.propTypes = {
  firstDayOfTheMonth: PropType.number.isRequired,
  lastDateOfLastMonth: PropType.instanceOf(Date).isRequired,
};
