import React from "react";
import styled from "styled-components";
import { SHORT_MONTH } from "./Helper";
interface BaseProps {
  state: any;
  gotoPreviousMonth: () => void;
  gotoNextMonth: () => void;
}

const MonthAndYearBox = styled.div`
  display: flex;
  justify-content: center;
`;

export default (props: BaseProps) => {
  const { month, year } = props.state;

  const monthname: string = Object.keys(SHORT_MONTH)[
    Math.max(0, Math.min(month - 1, 11))
  ];

  return (
    <MonthAndYearBox>
      <button onClick={props.gotoPreviousMonth}>{"<"}</button>
      <span className="title"> {SHORT_MONTH[monthname]} {year}</span>
      <button onClick={props.gotoNextMonth}>{">"}</button>
    </MonthAndYearBox>
  );
};
