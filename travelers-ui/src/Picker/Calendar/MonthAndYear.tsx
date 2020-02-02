import React from "react";
import styled from "styled-components";
import { SHORT_MONTH } from "./Helper";

interface BaseProps {
  state: any;
  gotoPrevMonth: () => void;
  gotoNextMonth: () => void;
}

const MonthAndYearBox = styled.div`
  display: flex;
  justify-content: center;
`;

export default (props: BaseProps) => {
  const { state, gotoPrevMonth, gotoNextMonth } = props;

  const monthname: string = Object.keys(SHORT_MONTH)[
    Math.max(0, Math.min(state.month - 1, 11))
  ];

  return (
    <MonthAndYearBox>
      <button onClick={gotoPrevMonth}>{"<"}</button>
      <span className="title">
        {SHORT_MONTH[monthname]} {state.year}
      </span>
      <button onClick={gotoNextMonth}>{">"}</button>
    </MonthAndYearBox>
  );
};
