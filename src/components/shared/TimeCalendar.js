import React from 'react';
import PropType from 'prop-types';
import ButtonDate from './ButtonDate';
import { showDays, MONTHS } from '../../constants';

const TimeCalendar = ({
  fullDate,
  prevDate,
  nextDate,
  setDate,
}) => {
  const currentMonthDetails = new Date(fullDate.getFullYear(), fullDate.getMonth() + 1, 0);
  const previousMonthDetails = new Date(fullDate.getFullYear(), fullDate.getMonth(), 0);
  const lastDateOfCurrentMonth = currentMonthDetails.getDate();
  const lastDateOfPreviousMonth = previousMonthDetails.getDate();
  const lastDayIndexOfPreviousMonth = previousMonthDetails.getDay();
  const days = showDays(
    lastDayIndexOfPreviousMonth, lastDateOfCurrentMonth, lastDateOfPreviousMonth,
  );

  return (
    <div className="calendar">
      <div className="month">
        <button type="button" className="btn-direction prev" onClick={prevDate}>
          <i className="bx bx-chevron-left icon" />
        </button>
        <div className="date">
          <h1 className="month__name">{MONTHS[fullDate.getMonth()]}</h1>
          <p className="month__full">{fullDate.toDateString()}</p>
        </div>
        <button type="button" className="btn-direction next" onClick={nextDate}>
          <i className="bx bxs-chevron-right icon" />
        </button>
      </div>
      <div className="weekdays">
        <div className="weekday">Sun</div>
        <div className="weekday">Mon</div>
        <div className="weekday">Tue</div>
        <div className="weekday">Wed</div>
        <div className="weekday">Thu</div>
        <div className="weekday">Fri</div>
        <div className="weekday">Sat</div>
      </div>
      <div className="days">
        {days.map((day) => (
          <ButtonDate
            key={day.key}
            date={day.date}
            prevDate={day.prevDate}
            nextDate={day.nextDate}
            oldDate={day.oldDate}
            fullDate={fullDate}
            setDate={setDate}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeCalendar;

TimeCalendar.propTypes = {
  fullDate: PropType.instanceOf(Date).isRequired,
  prevDate: PropType.func.isRequired,
  nextDate: PropType.func.isRequired,
  setDate: PropType.func.isRequired,
};

// days: PropType.arrayOf(PropType.shape({
//   date: PropType.number.isRequired,
//   prevDate: PropType.bool.isRequired,
//   nextDate: PropType.bool.isRequired,
//   key: PropType.string.isRequired,
// })).isRequired,
