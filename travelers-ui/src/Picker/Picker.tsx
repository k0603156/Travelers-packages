import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Container from "../Container/Container";
import Input from "../Input/Input";
import Calendar from "./Calendar/Calendar";
import Timmer from "./Timmer/Timmer";

interface BaseProps {
  /**Picker Input에 들어갈 값 */
  value: any;
  /**Picker Input을 바꾸는 함수 */
  setValue: React.Dispatch<any>;
  type: "date" | "time" | "dateTime";
  width?: string | number;
}

/**
 * 기본 피커 스타일👍
 *
 * - 설명
 */
const Picker = (props: BaseProps) => {
  const [isCalHidden, setIsCalHidden] = useState<boolean>(true);

  const wrapper: React.Ref<any> = useRef(null);

  useEffect(() => {
    window.addEventListener("click", (event: Event) => {
      if (event.target && wrapper.current)
        !wrapper.current.contains(event.target) && setIsCalHidden(true);
    });
    return () =>
      window.removeEventListener("click", (event: Event) => {
        if (event.target && wrapper.current)
          !wrapper.current.contains(event.target) && setIsCalHidden(true);
      });
  }, []);

  const setVisible = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsCalHidden(false);
  };

  return (
    <Container
      width={props.width}
      ref={wrapper}
      onClick={setVisible}
      position={"relative"}
    >
      <Input value={props.value} onChange={props.setValue} readOnly />
      <Container position={"absolute"}>
        {props.type === "date" || props.type === "dateTime" ? (
          <Calendar setInput={props.setValue} hidden={isCalHidden} />
        ) : null}
        {props.type === "time" || props.type === "dateTime" ? (
          <Timmer hidden={isCalHidden} />
        ) : null}
      </Container>
    </Container>
  );
};

Picker.defaultProps = {};
export default Picker;
