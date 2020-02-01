import React from "react";
import styled from "styled-components";
import { base_tyle } from "../@mix";

interface BaseProps {
  /**Heading 베이스 스타일 */
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  width?: string | number;
}

interface HeadingProps extends BaseProps {
  children: React.ReactNode;
}

const size = {
  h1: `
  height: 2.75rem;
  font-size: 2rem;
  line-height: 2.75rem;
  font-weight: 600;
  `,
  h2: `
  height: 2.5rem;
  font-size: 1.75rem;
  line-height: 2.5;
  font-weight: 700;
  `,
  h3: `
  height: 2.25rem;
  font-size: 1.5rem;
  font-weight: 800;
  `,
  h4: `
  height: 2rem;
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: 800;
  `,
  h5: `
  height: 1.75rem;
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 800;
  `,
  h6: `
  height: 1.5rem;
  font-size: 0.75rem;
  line-height: 1.5rem;
  font-weight: 800;
  `
};
const createHeading = (props: BaseProps) => styled[props.type]`
  width: ${props.width};
  margin: 0;
  ${base_tyle};
  ${size[props.size]};
  &:disabled {
    cursor: not-allowed;
  }
`;
/**
 * 기본 헤딩 스타일👍
 *
 * - 설명
 */
const Heading = (props: HeadingProps) => {
  const CHeading = createHeading(props);
  return <CHeading>{props.children}</CHeading>;
};

Heading.defaultProps = {
  type: "h1"
};
export default Heading;
