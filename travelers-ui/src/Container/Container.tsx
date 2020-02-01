import React from "react";
import styled from "styled-components";
import { base_tyle } from "../@mix";

interface BaseProps {
  /**Container 베이스 스타일 */
  width?: string | number;
  position?: "relative" | "absolute" | "fixed";
}

interface ContainerProps extends BaseProps {
  ref?: React.Ref<any>;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: React.ReactNode;
}

const CContainer = styled.div<ContainerProps>`
  ${base_tyle};
  width: ${props => props.width};
  position: ${props => props.position};
  &:disabled {
    cursor: not-allowed;
  }
`;
/**
 * 기본 컨테이너 스타일👍
 *
 * - 설명
 */
const Container = React.forwardRef(
  (props: ContainerProps, ref: React.Ref<any>) => {
    return (
      <CContainer
        ref={ref}
        onClick={props.onClick}
        width={props.width}
        position={props.position}
      >
        {props.children}
      </CContainer>
    );
  }
);

Container.defaultProps = {};
export default Container;
