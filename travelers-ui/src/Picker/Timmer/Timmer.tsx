import React, { useState } from "react";
import styled from "styled-components";
import { base_tyle } from "../../@mix";

interface BaseProps {
  hidden?: boolean;
}

const TimeBox = styled.div`
  display: ${props => (props.hidden ? "hidden" : "flex")};
`;
const HourBox = styled.div``;
const MinuteBox = styled.div``;
/**
 * 기본 타이머 스타일👍
 *
 * - 설명
 */
const Timmer = (props: BaseProps) => {
  const [time, setTime] = useState({
    hour: 0,
    minute: 0
  });

  return (
    <TimeBox hidden={props.hidden}>
      <HourBox>{time.hour}시</HourBox>
      <MinuteBox>{time.minute}분</MinuteBox>
    </TimeBox>
  );
};

Timmer.defaultProps = {};
export default Timmer;
