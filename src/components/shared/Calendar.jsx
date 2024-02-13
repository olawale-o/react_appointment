import PropType from 'prop-types';
import CalendarPreviousDays from './CalendarPreviousDays';
import CalendarNextDays from './CalendarNextdays';
import CalendarDays from './CalendarDays';
import style from './TimeCalendar.module.css';

const Calendar = ({
  firstDayOfTheMonth,
  lastDayOfMonth,
  lastDateOfLastMonth,
  days,
  setDate,
}) => (
  <ul className={style.days}>
    <>
      <CalendarPreviousDays
        firstDayOfTheMonth={firstDayOfTheMonth}
        lastDateOfLastMonth={lastDateOfLastMonth}
      />
      <CalendarDays days={days} setDate={setDate} />
      <CalendarNextDays lastDayOfMonth={lastDayOfMonth} />
    </>
  </ul>
);

export default Calendar;

Calendar.propTypes = {
  firstDayOfTheMonth: PropType.number.isRequired,
  lastDayOfMonth: PropType.number.isRequired,
  lastDateOfLastMonth: PropType.number.isRequired,
  days: PropType.arrayOf(Date).isRequired,
  setDate: PropType.func.isRequired,
};
