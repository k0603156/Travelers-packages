import React from "react";
import styled from "styled-components";
import { SHORT_WEEK } from "./Helper";
const WeekBox = styled.div`
  display: flex;
`;
const WeekAttr = styled.div`
  flex-basis: calc(calc(1 / 7) * 100%);
  text-align: right;
  padding: 0.1rem 0.5rem;
`;
const renderDayofWeek = (week: string) => {
  const daylabel = SHORT_WEEK[week];
  return <WeekAttr key={daylabel}>{daylabel}</WeekAttr>;
};

export default () => {
  return (
    <WeekBox>
      {Object.keys(SHORT_WEEK).map((week, index) => {
        return renderDayofWeek(week);
      })}
    </WeekBox>
  );
};
