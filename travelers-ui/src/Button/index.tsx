import React from "react";
import styled from "styled-components";
import Mix from "../_mix";

interface Theme {
  condition: "primary" | "secondary" | "tertiary";
  size: "small" | "medium" | "large";
}

interface ButtonProps extends Theme {
  children: React.ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | undefined;
}

const condition = {
  primary: `
  background: #20c997;
  color: white;
  &:hover { background: #38d9a9; }
  &:active { background: #12b886; }
  `,
  secondary: `
  background: #e9ecef;
  color: #343a40;
  &:hover { background: #f1f3f5; }
  &:active { background: #dee2e6; }
  `,
  tertiary: `
  background: none;
  color: #20c997;
  &:hover { background: #e6fcf5; }
  &:active { background: #c3fae8; }
  `
};
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
const Button = styled.button<ButtonProps>`
  ${Mix.base_tyle}
  user-select: none;

  ${(props: Theme) => condition[props.condition]}
  ${(props: Theme) => size[props.size]}
`;
const button = ({ children, onClick, condition, size }: ButtonProps) => {
  return (
    <Button onClick={onClick} condition={condition} size={size}>
      {children}
    </Button>
  );
};

button.defaultProps = {
  condition: "primary",
  size: "midium"
};

export default button;
