import PropType from 'prop-types';
import ButtonDate from './ButtonDate';

const TimeCalendar = ({
  monthName,
  fullDate,
  days,
  prevDate,
  nextDate,
  setDate,
}) => (
  <div className="calendar">
    <div className="month">
      <button type="button" className="btn-direction prev" onClick={prevDate}>
        <i className="bx bx-chevron-left icon" />
      </button>
      <div className="date">
        <h1 className="month__name">{monthName}</h1>
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

export default TimeCalendar;

TimeCalendar.propTypes = {
  monthName: PropType.string.isRequired,
  fullDate: PropType.string.isRequired,
  days: PropType.arrayOf(PropType.shape({
    date: PropType.number.isRequired,
    prevDate: PropType.bool.isRequired,
    nextDate: PropType.bool.isRequired,
    key: PropType.string.isRequired,
  })).isRequired,
  prevDate: PropType.func.isRequired,
  nextDate: PropType.func.isRequired,
  setDate: PropType.func.isRequired,
};
