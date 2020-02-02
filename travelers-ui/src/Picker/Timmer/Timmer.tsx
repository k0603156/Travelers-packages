import React, { useState } from "react";
import styled from "styled-components";
import { base_tyle } from "../../@mix";

interface BaseProps {
  hidden?: boolean;
  onChangeValue: React.Dispatch<any>;
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
    hour: 24,
    minute: 0
  });

  const decreaseHour = () => {
    const hour = ((time.hour + 22) % 24) + 1;
    setTime({ ...time, hour });
    props.onChangeValue({ time: `${hour}:${time.minute}` });
  };
  const increaseHour = () => {
    const hour = (time.hour % 24) + 1;
    setTime({ ...time, hour });
    props.onChangeValue({ time: `${hour}:${time.minute}` });
  };
  const decreaseMinute = () => {
    const minute = (time.minute + 59) % 60;
    setTime({ ...time, minute });
    props.onChangeValue({ time: `${time.hour}:${minute}` });
  };
  const increaseMinute = () => {
    const minute = (time.minute + 1) % 60;
    setTime({ ...time, minute });
    props.onChangeValue({ time: `${time.hour}:${minute}` });
  };
  return (
    <TimeBox hidden={props.hidden}>
      <HourBox>
        <button onClick={decreaseHour}>{"<"}</button>
        {time.hour}시 <button onClick={increaseHour}>{">"}</button>
      </HourBox>
      <MinuteBox>
        <button onClick={decreaseMinute}>{"<"}</button>
        {time.minute}분 <button onClick={increaseMinute}>{">"}</button>
      </MinuteBox>
    </TimeBox>
  );
};

Timmer.defaultProps = {};
export default Timmer;
