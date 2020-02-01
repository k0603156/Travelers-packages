import React from "react";
import styled from "styled-components";
import { base_tyle, condition } from "../@mix";

export interface BaseProps {
  /**버튼 베이스 스타일 */
  condition: "primary" | "secondary" | "tertiary";
  size: "small" | "medium" | "large";
  width?: string | number;
  disabled?: boolean;
}

interface ButtonProps extends BaseProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const size = {
  small: `
  height: 1.75rem;
  font-size: 0.75rem;
  line-height: 0.75rem;
  padding: 0 0.875rem;
  font-weight: 600;
  `,
  medium: `
  height: 2.5rem;
  font-size: 1rem;
  line-height: 1;
  padding: 0 1rem;
  font-weight: 700;
  `,
  large: `
  height: 2.75rem;
  font-size: 1.125rem;
  line-height: 1.125rem;
  padding: 0 1.5rem;
  font-weight: 800;
  `
};

const CButton = styled.button<ButtonProps>`
  ${base_tyle};
  user-select: none;
  width: ${(props: BaseProps) => props.width};
  ${(props: BaseProps) => condition[props.condition]};
  ${(props: BaseProps) => size[props.size]};
  margin: 5px 0;
  &:disabled {
    cursor: not-allowed;
  }
`;
/**
 * 기본 버튼 스타일👍
 *
 * - 설명
 */
const Button = ({
  children,
  onClick,
  condition,
  size,
  width,
  disabled,
  type
}: ButtonProps) => {
  return (
    <CButton
      onClick={onClick}
      condition={condition}
      size={size}
      width={width}
      disabled={disabled}
      type={type}
    >
      {children}
    </CButton>
  );
};

Button.defaultProps = {
  condition: "primary",
  size: "medium",
  type: "button"
};

export default Button;
