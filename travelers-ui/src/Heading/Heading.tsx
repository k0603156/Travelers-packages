import React from "react";
import styled from "styled-components";
import Mix from "../@mix";

export interface BaseProps {
  /**Heading 베이스 스타일 */
  size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  width?: string | number;
}

interface HeadingProps extends BaseProps {
  children: React.ReactNode;
}

const size = {
  h1: `
  height: 2.75rem;
  font-size: 1.75rem;
  line-height: 2.75rem;
  padding: 0 1rem;
  font-weight: 600;
  `,
  h2: `
  height: 2.5rem;
  font-size: 1.5rem;
  line-height: 2.5;
  padding: 0 0.875rem;
  font-weight: 700;
  `,
  h3: `
  height: 2.75rem;
  font-size: 1.125rem;
  line-height: 1.125rem;
  padding: 0 1.5rem;
  font-weight: 800;
  `,
  h4: `
  height: 2.75rem;
  font-size: 1.125rem;
  line-height: 1.125rem;
  padding: 0 1.5rem;
  font-weight: 800;
  `,
  h5: `
  height: 2.75rem;
  font-size: 1.125rem;
  line-height: 1.125rem;
  padding: 0 1.5rem;
  font-weight: 800;
  `,
  h6: `
  height: 2.75rem;
  font-size: 1.125rem;
  line-height: 1.125rem;
  padding: 0 1.5rem;
  font-weight: 800;
  `
};

const CHeading = styled.div<HeadingProps>`
  ${Mix.base_tyle};
  width: ${(props: BaseProps) => props.width};
  ${(props: BaseProps) => size[props.size]};
  &:disabled {
    cursor: not-allowed;
  }
`;
/**
 * 기본 헤딩 스타일👍
 *
 * - 설명
 */
const Heading = ({ children, size, width }: HeadingProps) => {
  return (
    <CHeading size={size} width={width}>
      {children}
    </CHeading>
  );
};

Heading.defaultProps = {
  condition: "primary",
  size: "h3"
};

export default Heading;
