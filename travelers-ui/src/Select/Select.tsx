import React from "react";
import styled from "styled-components";
import { base_tyle, condition } from "../@mix";

export interface BaseProps {
  /**셀렉트 베이스 스타일 */
  condition: "primary" | "secondary" | "tertiary";
  width?: string | number;
  disabled?: boolean;
}
interface SelectProps extends BaseProps {
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CSelect = styled.select<SelectProps>`
  ${base_tyle};
  user-select: none;
  ${(props: BaseProps) => condition[props.condition]};
  width: ${(props: BaseProps) => props.width};
  &:disabled {
    cursor: not-allowed;
  }
`;
/**
 * 기본 셀렉트 스타일👍
 *
 * - 설명
 */
const Select = ({
  children,
  onChange,
  condition,
  width,
  disabled
}: SelectProps) => {
  return (
    <CSelect
      onChange={onChange}
      condition={condition}
      width={width}
      disabled={disabled}
    >
      {children}
    </CSelect>
  );
};

Select.defaultProps = {
  condition: "primary"
};

export default Select;
