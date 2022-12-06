const DATE = new Date();
const date = DATE.getDate();
export default function showDays(
  lastDayIndexOfPreviousMonth,
  lastDateOfCurrentMonth,
  lastDateOfPreviousMonth,
  nextDays = 14,
) {
  const days = [];
  for (let x = lastDayIndexOfPreviousMonth; x >= 0; x -= 1) {
    days.push({
      date: lastDateOfPreviousMonth - x, prevDate: true, nextDate: false, oldDate: false, key: `prevDate-${x}`,
    });
  }

  for (let i = 1; i <= lastDateOfCurrentMonth; i += 1) {
    if (i < date) {
      days.push({
        date: i, prevDate: false, nextDate: false, oldDate: true, key: `old-date-${i}`,
      });
    } else {
      days.push({
        date: i, prevDate: false, nextDate: false, oldDate: false, key: `date-${i}`,
      });
    }
  }

  for (let j = 1; j <= nextDays; j += 1) {
    days.push({
      date: j, prevDate: false, nextDate: true, oldDate: false, key: `nextDate-${j}`,
    });
  }

  return days;
}
