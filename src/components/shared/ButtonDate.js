import PropType from 'prop-types';

const DATE = new Date();
const currentMonth = DATE.getMonth();

const ButtonDate = ({
  date, prevDate, nextDate, fullDate, oldDate,
}) => {
  if (prevDate) {
    return (
      <button
        type="button"
        className="day prev-date"
        disabled
      >
        {date}
      </button>
    );
  }
  if (nextDate) {
    return (
      <button
        type="button"
        className="day next-date"
        disabled
      >
        {date}
      </button>
    );
  }
  if (oldDate) {
    return (
      <button
        type="button"
        className="day prev-date"
        disabled
      >
        {date}
      </button>
    );
  }
  return (
    <button
      type="button"
      className={`day ${date === DATE.getDate() && currentMonth === DATE.getMonth() ? 'today' : 'new-date'}`}
      onClick={() => {
        console.log(fullDate.getFullYear());
        console.log(fullDate.getMonth());
        console.log(date);
      }}
    >
      {date}
    </button>
  );
};

ButtonDate.propTypes = {
  date: PropType.number.isRequired,
  prevDate: PropType.bool.isRequired,
  nextDate: PropType.bool.isRequired,
  oldDate: PropType.bool.isRequired,
  fullDate: PropType.string.isRequired,
};

export default ButtonDate;
