import React, { useState } from "react";
import styled from "styled-components";
import Mix from "../@mix";
import calendar, {
  isDate,
  isSameDay,
  isSameMonth,
  getDateISO,
  getNextMonth,
  getPreviousMonth,
  WEEK_DAYS,
  CALENDAR_MONTHS,
  DAYS
} from "./Helper";

interface BaseProps {
  /**데이트피커 베이스 스타일 */
  condition: "primary" | "secondary" | "tertiary";
  width?: string | number;
  date: any;
}

interface DatePickerProps extends BaseProps {}

const CDatePicker = styled.div<DatePickerProps>`
  ${Mix.base_tyle};
  user-select: none;
  padding: 5px 3px;
  width: ${(props: BaseProps) => props.width};
  &:disabled {
    cursor: not-allowed;
  }
`;
const MonthAndYearBox = styled.div`
  display: flex;
  justify-content: center;
`;
const DayBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const DayAttr = styled.div`
  flex-basis: calc(calc(1 / 7) * 100%);
`;
const WeekBox = styled.div`
  display: flex;
`;
const WeekAttr = styled.div`
  flex-basis: calc(calc(1 / 7) * 100%);
`;
/**
 * 기본 데이트피커 스타일👍
 *
 * - 설명
 */
const DatePicker = (props: DatePickerProps) => {
  const [state, setState] = useState({
    ...resolveStateFromProp(),
    today: new Date()
  });
  function resolveStateFromDate(date: Date) {
    const isDateObject = isDate(date);
    const _date = isDateObject ? date : new Date();

    return {
      current: isDateObject ? date : new Date(),
      month: +_date.getMonth() + 1,
      year: _date.getFullYear()
    };
  }
  function resolveStateFromProp() {
    return resolveStateFromDate(props.date);
  }
  const getCalendarDates = () => {
    const { current, month, year } = state;
    const calendarMonth = month || +state.current.getMonth() + 1;
    const calendarYear = year || state.current.getFullYear();

    return calendar(calendarMonth, calendarYear);
  };

  const renderMonthAndYear = () => {
    const { month, year } = state;

    // Resolve the month name from the CALENDAR_MONTHS object map
    const monthname = Object.keys(CALENDAR_MONTHS)[
      Math.max(0, Math.min(month - 1, 11))
    ];

    return (
      <div>
        <div
          // onMouseDown={handlePrevious}
          // onMouseUp={clearPressureTimer}
          title="Previous Month"
        />

        <div>
          {monthname} {year}
        </div>

        <div
          // onMouseDown={handleNext}
          // onMouseUp={clearPressureTimer}
          title="Next Month"
        />
      </div>
    );
  };
  const renderDayLabel = (day: DAYS) => {
    // Resolve the day of the week label from the WEEK_DAYS object map
    const daylabel = WEEK_DAYS[day].toUpperCase();

    return <WeekAttr key={daylabel}>{daylabel}</WeekAttr>;
  };
  const renderCalendarDate = (date: (string | number)[], index: number) => {
    const { current, month, year, today } = state;
    const _date = new Date(date.join("-"));

    // Check if calendar date is same day as today
    const isToday = isSameDay(_date, today);

    // Check if calendar date is same day as currently selected date
    const isCurrent = current && isSameDay(_date, current);

    // Check if calendar date is in the same month as the state month and year
    // const inmonth =
    //   month && year && isSameMonth(_date, new Date([year, month, 1].join("-")));

    // The click handler
    const onClick = gotoDate(_date);

    const props = { index, onClick, title: _date.toDateString() };

    // Conditionally render a styled date component
    // const DateComponent = isCurrent
    //   ? Styled.HighlightedCalendarDate
    //   : isToday
    //   ? Styled.TodayCalendarDate
    //   : Styled.CalendarDate;

    return (
      <DayAttr key={getDateISO(_date)!} {...props}>
        {_date.getDate()}
      </DayAttr>
    );
  };

  const gotoDate = (date: Date) => (evt: any) => {
    evt && evt.preventDefault();
    const { current } = state;
    // const { onDateChanged } = props;

    // !(current && isSameDay(date, current)) &&
    //   setState(resolveStateFromDate(date), () => {
    //     typeof onDateChanged === "function" && onDateChanged(date);
    //   });
  };

  const gotoPreviousMonth = () => {
    const { month, year } = state;
    setState({ ...state, ...getPreviousMonth(month, year) });
  };

  const gotoNextMonth = () => {
    const { month, year } = state;
    setState({ ...state, ...getNextMonth(month, year) });
  };

  // const gotoPreviousYear = () => {
  //   const { year } = state;
  //   setState({ year: year - 1 });
  // };

  // const gotoNextYear = () => {
  //   const { year } = state;
  //   setState({ year: year + 1 });
  // };

  // const handlePressure = fn => {
  //   if (typeof fn === "function") {
  //     fn();
  //     pressureTimeout = setTimeout(() => {
  //       pressureTimer = setInterval(fn, 100);
  //     }, 500);
  //   }
  // };

  // const clearPressureTimer = () => {
  //   pressureTimer && clearInterval(pressureTimer);
  //   pressureTimeout && clearTimeout(pressureTimeout);
  // };

  // const handlePrevious = evt => {
  //   evt && evt.preventDefault();
  //   const fn = evt.shiftKey ? gotoPreviousYear : gotoPreviousMonth;
  //   handlePressure(fn);
  // };

  // const handleNext = evt => {
  //   evt && evt.preventDefault();
  //   const fn = evt.shiftKey ? gotoNextYear : gotoNextMonth;
  //   handlePressure(fn);
  // };
  return (
    <CDatePicker
      condition={props.condition}
      width={props.width}
      date={props.date}
    >
      <MonthAndYearBox>
        <button onClick={gotoPreviousMonth}>left</button>
        <span className="title">{renderMonthAndYear()}</span>
        <button onClick={gotoNextMonth}>right</button>
      </MonthAndYearBox>
      <WeekBox className="body">
        {Object.keys(WEEK_DAYS).map((date, index) =>
          renderDayLabel(date as DAYS)
        )}
      </WeekBox>
      <DayBox>
        {getCalendarDates().map((date, index) =>
          renderCalendarDate(date, index)
        )}
      </DayBox>
    </CDatePicker>
  );
};

DatePicker.defaultProps = {
  condition: "primary",
  date: new Date()
};

export default DatePicker;
