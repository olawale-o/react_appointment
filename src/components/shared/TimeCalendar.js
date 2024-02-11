import { useState } from 'react';
// import PropType from 'prop-types';
import {
  eachDayOfInterval, endOfMonth, format, startOfMonth, getDay, getDate,
} from 'date-fns';

import Calendar from './Calendar';

import { DAYS_OF_THE_WEEK } from '../../constants';
import style from './TimeCalendar.module.css';

const TimeCalendar = () => {
  const [date, setDate] = useState(new Date());
  let currentYear = date.getFullYear();
  let currentMonth = date.getMonth();

  const firstFullDate = startOfMonth(new Date(currentYear, currentMonth + 1, 0));
  const lastFullDate = endOfMonth(new Date(currentYear, currentMonth + 1, 0));

  const firstDayOfTheMonth = getDay(startOfMonth(new Date(currentYear, currentMonth, 1)));
  const lastDateOfMonth = getDate(lastFullDate);
  const lastDayOfMonth = getDay(endOfMonth(new Date(currentYear, currentMonth, lastDateOfMonth)));
  const lastDateOfLastMonth = getDate(endOfMonth(new Date(currentYear, currentMonth, 0)));

  const days = eachDayOfInterval({
    start: firstFullDate,
    end: lastFullDate,
  });

  const handleDateChange = (dir) => {
    currentMonth = dir === 'prev' ? currentMonth - 1 : currentMonth + 1;
    if (currentMonth < 0 || currentMonth > 11) {
      setDate(new Date(currentYear, currentMonth));
      currentYear = date.getFullYear();
      currentMonth = date.getMonth();
    } else {
      setDate(new Date(currentYear, currentMonth));
    }
  };

  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.icons}>
          <button type="button" className={`${style.icon} ${style.prev}`} onClick={() => handleDateChange('prev')}>
            <i className="bx bx-chevron-left" />
          </button>
        </div>
        <div className={style.calendars}>
          <div className={style.calendar}>
            <p className={style.current_date}>{format(date, 'MMM yyyy')}</p>
            <ul className={style.weeks}>
              {DAYS_OF_THE_WEEK.map((week) => (<li key={week.id}>{week.short}</li>))}
            </ul>
            <Calendar
              firstDayOfTheMonth={firstDayOfTheMonth}
              lastDayOfMonth={lastDayOfMonth}
              lastDateOfLastMonth={lastDateOfLastMonth}
              days={days}
            />
          </div>
        </div>
        <div className={style.icons}>
          <button type="button" className={`${style.icon} ${style.next}`} onClick={() => handleDateChange('next')}>
            <i className="bx bx-chevron-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeCalendar;

// TimeCalendar.propTypes = {
//   fullDate: PropType.instanceOf(Date).isRequired,
//   prevDate: PropType.func.isRequired,
//   nextDate: PropType.func.isRequired,
//   setDate: PropType.func.isRequired,
//   appointmentDates: PropType.arrayOf(PropType.shape({
//     book_for: PropType.string.isRequired,
//   })).isRequired,
// };
