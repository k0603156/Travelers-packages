import React, { useState } from "react";
import styled from "styled-components";
import { base_tyle } from "../../@mix";
import { isDate, getNextMonth, getPreviousMonth } from "./Helper";
import MonthAndYear from "./MonthAndYear";
import Week from "./Week";
import Day from "./Day";

interface StyleProps {
  position?: "relative" | "absolute" | "fixed";
  width?: string | number;
  hidden?: boolean;
}

interface BaseProps extends StyleProps {
  setInput: React.Dispatch<any>;
  date: any;
}

const CCalendar = styled.div<StyleProps>`
  ${base_tyle};
  user-select: none;
  padding: 1rem 0.5rem;
  box-shadow: 1px 1px 2px black;
  width: ${props => props.width};
  min-width: 300px;
  position: ${props => props.position};
  display: ${props => props.hidden && "none"};
`;

function resolveStateFromDate(date: Date) {
  const isDateObject = isDate(date);
  const _date = isDateObject ? date : new Date();

  return {
    current: isDateObject ? date : new Date(),
    month: +_date.getMonth() + 1,
    year: _date.getFullYear()
  };
}
/**
 * 기본 데이트피커 스타일👍
 *
 * - 설명
 */
const Calendar = (props: BaseProps) => {
  const [state, setState] = useState({
    ...resolveStateFromDate(props.date),
    today: new Date()
  });

  const gotoPreviousMonth = () => {
    const { month, year } = state;
    setState({ ...state, ...getPreviousMonth(month, year) });
  };

  const gotoNextMonth = () => {
    const { month, year } = state;
    setState({ ...state, ...getNextMonth(month, year) });
  };

  const gotoDate = (date: Date) => (event: any) => {
    setState({ ...state, ...resolveStateFromDate(date) });
    props.setInput(resolveStateFromDate(date).current);
  };
  return (
    <CCalendar
      position={props.position}
      width={props.width}
      hidden={props.hidden}
    >
      <MonthAndYear
        state={state}
        gotoPreviousMonth={gotoPreviousMonth}
        gotoNextMonth={gotoNextMonth}
      />
      <Week />
      <Day state={state} gotoDate={gotoDate} />
    </CCalendar>
  );
};

Calendar.defaultProps = {
  date: new Date()
};

export default Calendar;
