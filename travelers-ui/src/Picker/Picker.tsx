import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Container from "../Container/Container";
import Input from "../Input/Input";
import Calendar from "./Calendar";
import Timmer from "./Timmer/Timmer";

interface BaseProps {
  value: any;
  type: "date" | "time" | "dateTime";
  onChangeValue: ({ date, time }: { date: string; time: string }) => void;
  width?: string | number;
}

/**
 * 기본 피커 스타일👍
 *
 * - 설명
 */
const Picker = (props: BaseProps) => {
  const { value, type, onChangeValue, width } = props;
  const [isCalHidden, setIsCalHidden] = useState<boolean>(true);
  const wrapper: React.Ref<any> = useRef(null);

  const setVisible = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsCalHidden(false);
  };

  useEffect(() => {
    const handler = (event: Event) => {
      if (event.target && wrapper.current)
        !wrapper.current.contains(event.target) && setIsCalHidden(true);
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  const ContainerProps = {
    width,
    ref: wrapper,
    onClick: setVisible,
    position: "relative"
  } as const;

  return (
    <Container {...ContainerProps}>
      <input value={value} readOnly />
      <Container position={"absolute"}>
        {type === "date" || type === "dateTime" ? (
          <Calendar onChangeValue={onChangeValue} hidden={isCalHidden} />
        ) : null}
        {type === "time" || type === "dateTime" ? (
          <Timmer onChangeValue={onChangeValue} hidden={isCalHidden} />
        ) : null}
      </Container>
    </Container>
  );
};

Picker.defaultProps = {};
export default Picker;
