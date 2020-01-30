import React from "react";
import styled from "styled-components";
import Mix from "../@mix";

export interface BaseProps {
  /**인풋 베이스 스타일 */
  condition: "primary" | "secondary" | "tertiary";
  width?: string | number;
  disabled?: boolean;
  type?: "text" | "password" | "date";
}
interface InputProps extends BaseProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const condition = {
  primary: `
  background: #20c997;
  color: white;
  &:hover { background: #38d9a9; }
  &:active { background: #12b886; }
  &:disabled {
    background: #aed9cc;
  }
  `,
  secondary: `
  background: #e9ecef;
  color: #343a40;
  &:hover { background: #f1f3f5; }
  &:active { background: #dee2e6; }
  &:disabled {
    color: #c6d3e1;
  }
  `,
  tertiary: `
  background: none;
  color: #20c997;
  &:hover { background: #e6fcf5; }
  &:active { background: #c3fae8; }
  &:disabled {
    color: #bcd9d0;
  }
  `
};

const CInput = styled.input<InputProps>`
  ${Mix.base_tyle};
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
const Input = ({ onChange, condition, width, disabled, type }: InputProps) => {
  return (
    <CInput
      onChange={onChange}
      condition={condition}
      width={width}
      disabled={disabled}
      type={type}
    />
  );
};

Input.defaultProps = {
  condition: "primary"
};

export default Input;
