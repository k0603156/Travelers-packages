import React from "react";
import styled from "styled-components";
import { base_tyle, condition } from "../@mix";

interface BaseProps {
  /**인풋 베이스 스타일 */
  condition: "primary" | "secondary" | "tertiary";
  width?: string | number;
  readOnly?: boolean;
  disabled?: boolean;
  type?: "text" | "password" | "date";
}
interface InputProps extends BaseProps {
  id?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const CInput = styled.input<InputProps>`
  ${base_tyle};
  user-select: none;
  padding: 5px 3px;
  ${(props: BaseProps) => condition[props.condition]};
  width: ${(props: BaseProps) => props.width};
  &:disabled {
    cursor: not-allowed;
  }
`;
/**
 * 기본 인풋 스타일👍
 *
 * - 설명
 */
const Input = (props: InputProps) => {
  return (
    <CInput
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      condition={props.condition}
      width={props.width}
      disabled={props.disabled}
      readOnly={props.readOnly}
      type={props.type}
    />
  );
};

Input.defaultProps = {
  condition: "primary",
  width: "100%"
};

export default Input;
