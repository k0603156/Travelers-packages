// Weeks displayed on calendar
export const CALENDAR_WEEKS = 6;
export const THIS_YEAR = +new Date().getFullYear();
export const THIS_MONTH = +new Date().getMonth() + 1;
export const SHORT_WEEK: {
  [key: string]: string;
} = {
  Sunday: "일",
  Monday: "월",
  Tuesday: "화",
  Wednesday: "수",
  Thursday: "목",
  Friday: "금",
  Saturday: "토"
};
export const SHORT_MONTH: {
  [key: string]: string;
} = {
  January: "1월",
  February: "2월",
  March: "3월",
  April: "4월",
  May: "5월",
  June: "6월",
  July: "7월",
  August: "8월",
  September: "9월",
  October: "10월",
  November: "11월",
  December: "12월"
};

export const zeroPad = (value: number, length: number) => {
  return `${value}`.padStart(length, "0");
};

export const getMonthDays = (month = THIS_MONTH, year = THIS_YEAR): number => {
  const months30 = [4, 6, 9, 11];
  const leapYear = year % 4 === 0;
  return month === 2
    ? leapYear
      ? 29
      : 28
    : months30.includes(month)
    ? 30
    : 31;
};

// (int) First day of the month for a given year from 1 - 7
// 1 => Sunday, 7 => Saturday
export const getMonthFirstDay = (
  month = THIS_MONTH,
  year = THIS_YEAR
): number => {
  return new Date(`${year}-${zeroPad(month, 2)}-01`).getDay() + 1;
};
// (bool) Checks if a value is a date - this is just a simple check
export const isDate = (date: any) => {
  const isDate = Object.prototype.toString.call(date) === "[object Date]";
  const isValidDate = date && !Number.isNaN(date.valueOf());

  return isDate && isValidDate;
};

export const isSameMonth = (date: Date, basedate = new Date()) => {
  if (!(isDate(date) && isDate(basedate))) return false;

  const basedateMonth: number = basedate.getMonth() + 1;
  const basedateYear: number = basedate.getFullYear();

  const dateMonth: number = date.getMonth() + 1;
  const dateYear: number = date.getFullYear();

  return basedateMonth === dateMonth && basedateYear === dateYear;
};

export const isSameDay = (date: Date, basedate: Date) => {
  if (!(isDate(date) && isDate(basedate))) return false;

  const basedateDate: number = basedate.getDate();
  const basedateMonth: number = basedate.getMonth() + 1;
  const basedateYear: number = basedate.getFullYear();

  const dateDate: number = date.getDate();
  const dateMonth: number = date.getMonth() + 1;
  const dateYear: number = date.getFullYear();

  return (
    basedateDate === dateDate &&
    basedateMonth === dateMonth &&
    basedateYear === dateYear
  );
};

// (string) Formats the given date as YYYY-MM-DD
// Months and Days are zero padded
export const getDateISO = (date = new Date()) => {
  if (!isDate(date)) return null;

  return [
    date.getFullYear(),
    zeroPad(+date.getMonth() + 1, 2),
    zeroPad(+date.getDate(), 2)
  ].join("-");
};

// ({month, year}) Gets the month and year before the given month and year
// For example: getPreviousMonth(1, 2000) => {month: 12, year: 1999}
// while: getPreviousMonth(12, 2000) => {month: 11, year: 2000}
export const getPreviousMonth = (month: number, year: number) => {
  const prevMonth = month > 1 ? month - 1 : 12;
  const prevMonthYear = month > 1 ? year : year - 1;

  return { month: prevMonth, year: prevMonthYear };
};

// ({month, year}) Gets the month and year after the given month and year
// For example: getNextMonth(1, 2000) => {month: 2, year: 2000}
// while: getNextMonth(12, 2000) => {month: 1, year: 2001}
export const getNextMonth = (month: number, year: number) => {
  const nextMonth = month < 12 ? month + 1 : 1;
  const nextMonthYear = month < 12 ? year : year + 1;

  return { month: nextMonth, year: nextMonthYear };
};

// Calendar builder for a month in the specified year
// Returns an array of the calendar dates.
// Each calendar date is represented as an array => [YYYY, MM, DD]

export default (month = THIS_MONTH, year = THIS_YEAR) => {
  // Get number of days in the month and the month's first day

  const monthDays = getMonthDays(month, year);
  const monthFirstDay = getMonthFirstDay(month, year);

  // Get number of days to be displayed from previous and next months
  // These ensure a total of 42 days (6 weeks) displayed on the calendar

  const daysFromPrevMonth = monthFirstDay - 1;
  const daysFromNextMonth =
    CALENDAR_WEEKS * 7 - (daysFromPrevMonth + monthDays);

  // Get the previous and next months and years

  const { month: prevMonth, year: prevMonthYear } = getPreviousMonth(
    month,
    year
  );
  const { month: nextMonth, year: nextMonthYear } = getNextMonth(month, year);

  // Get number of days in previous month
  const prevMonthDays = getMonthDays(prevMonth, prevMonthYear);

  // Builds dates to be displayed from previous month

  const prevMonthDates = [...new Array(daysFromPrevMonth)].map((n, index) => {
    const day = index + 1 + (prevMonthDays - daysFromPrevMonth);
    return [prevMonthYear, zeroPad(prevMonth, 2), zeroPad(day, 2)];
  });

  // Builds dates to be displayed from current month

  const thisMonthDates = [...new Array(monthDays)].map((n, index) => {
    const day = index + 1;
    return [year, zeroPad(month, 2), zeroPad(day, 2)];
  });

  // Builds dates to be displayed from next month

  const nextMonthDates = [...new Array(daysFromNextMonth)].map((n, index) => {
    const day = index + 1;
    return [nextMonthYear, zeroPad(nextMonth, 2), zeroPad(day, 2)];
  });

  // Combines all dates from previous, current and next months
  return [...prevMonthDates, ...thisMonthDates, ...nextMonthDates];
};
