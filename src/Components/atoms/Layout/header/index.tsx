import React from "react";
import styled from "styled-components";
import { Layout } from "antd";
import { BasicProps } from "antd/es/layout/layout";

const { Header } = Layout;

interface headerProps extends BasicProps {
  /**true? height:auto : height:64px */
  heightauto?: boolean;
  style?: any;
}

const header = styled(({ heightauto, ...props }: headerProps) => (
  <Header {...props} />
))`
  background: white;
  padding: 0;

  ${({ heightauto }) => heightauto && `height:auto`};
`;

export default header;
