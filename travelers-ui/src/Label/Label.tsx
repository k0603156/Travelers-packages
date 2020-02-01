import React from "react";
import styled from "styled-components";
import { base_tyle } from "../@mix";

interface BaseProps {
  /**라벨 베이스 스타일 */
}
interface LabelProps extends BaseProps {
  htmlFor: string;
  children: string;
}

const CLabel = styled.label`
  ${base_tyle};
  user-select: none;
`;
/**
 * 기본 라벨 스타일👍
 * - ..
 */
const Label = ({ htmlFor, children }: LabelProps) => {
  return <CLabel htmlFor={htmlFor}>{children}</CLabel>;
};

Label.defaultProps = {
  htmlFor: undefined
};

export default Label;
