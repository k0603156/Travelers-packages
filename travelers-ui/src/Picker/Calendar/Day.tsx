import React from "react";
import styled from "styled-components";
import calendar, { isSameDay, getDateISO } from "./Helper";

interface BaseProps {
  state: { current: Date; month: number; year: number; today: Date };
  onClickDate: (date: any) => (e: any) => void;
}
interface DayProps {
  index: any;
  onClick: (e: any) => void;
  title: string;
  isToday: boolean;
  isCurrent: boolean;
}

const DayBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const DayAttr = styled.div<DayProps>`
  flex-basis: calc(calc(1 / 7) * 100%);
  text-align: right;
  box-sizing: border-box;
  padding: 0.1rem 0.5rem;
  border: ${({ isToday }) => isToday && "1px solid red"};
  background: ${({ isCurrent }) => isCurrent && "rgba(255,0,0,0.1)"};
  :hover {
    color: red;
  }
`;
export default (props: BaseProps) => {
  const { state, onClickDate } = props;
  const { current, month, year, today } = state;

  const getCalendarDates = () => {
    const calendarMonth = month || current.getMonth() + 1;
    const calendarYear = year || current.getFullYear();
    return calendar(calendarMonth, calendarYear);
  };

  const renderCalendarDate = getCalendarDates().map((date, index) => {
    const _date = new Date(date.join("-"));
    const props = {
      index,
      onClick: onClickDate(date.join("-")),
      title: _date.toDateString(),
      isToday: isSameDay(_date, today),
      isCurrent: current && isSameDay(_date, current)
    };

    return (
      <DayAttr key={getDateISO(_date)!} {...props}>
        {_date.getDate()}
      </DayAttr>
    );
  });
  return <DayBox>{renderCalendarDate}</DayBox>;
};
