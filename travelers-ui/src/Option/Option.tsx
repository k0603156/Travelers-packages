import React from "react";
import styled from "styled-components";
import Mix from "../@mix";

export interface BaseProps {
  /**옵션 베이스 스타일 */
  disabled?: boolean;
}
interface OptionProps extends BaseProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLOptionElement, MouseEvent>) => void;
}

const COption = styled.option<OptionProps>`
  ${Mix.base_tyle};
  user-select: none;

  &:disabled {
    cursor: not-allowed;
  }
`;
/**
 * 기본 옵션 스타일👍
 *
 * - 셀렉트의 스타일을 상속합니다
 */
const Option = ({ children, onClick, disabled }: OptionProps) => {
  return (
    <COption onClick={onClick} disabled={disabled}>
      {children}
    </COption>
  );
};

Option.defaultProps = {
  condition: "primary"
};

export default Option;
