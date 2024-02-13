import PropType from 'prop-types';

const DATE = new Date();
const currentMonth = DATE.getMonth();

const ButtonDate = ({
  date,
  prevDate,
  nextDate,
  fullDate,
  oldDate,
  setDate,
  appointmentDate,
}) => {
  if (prevDate || oldDate || appointmentDate) {
    return (
      <button
        type="button"
        className={`day prev-date ${appointmentDate && 'appointment-date'}`}
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
  return (
    <button
      type="button"
      className={`day ${date === DATE.getDate() && currentMonth === DATE.getMonth() ? 'today' : 'new-date'}`}
      onClick={() => setDate(new Date(fullDate.getFullYear(), fullDate.getMonth(), date))}
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
  appointmentDate: PropType.bool.isRequired,
  fullDate: PropType.instanceOf(Date).isRequired,
  setDate: PropType.func.isRequired,
};

export default ButtonDate;
