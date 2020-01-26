import React from "react";
import styled from "styled-components";

const Button = styled.div<ButtonTheme>`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  user-select: none;
  ${props => {
    switch (props.theme) {
      case "primary":
        return "background: #20c997; color: white; &:hover { background: #38d9a9; }&:active { background: #12b886; }";
      case "secondary":
        return "background: #e9ecef; color: #343a40; &:hover { background: #f1f3f5; } &:active { background: #dee2e6; }";
      case "tertiary":
        return "background: none; color: #20c997; &:hover { background: #e6fcf5; }&:active { background: #c3fae8; }";
      default:
        return "background: #20c997; color: white; &:hover { background: #38d9a9; } &:active { background: #12b886; }";
    }
  }}
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
`;
const button = ({ children, onClick, theme }: ButtonProps) => {
  return (
    <Button onClick={onClick} theme={theme}>
      {children}
    </Button>
  );
};

export default button;
