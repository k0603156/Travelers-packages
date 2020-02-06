import React from "react";
import styled from "styled-components";
import { Layout } from "antd";
import { BasicProps } from "antd/es/layout/layout";

const { Sider } = Layout;

interface siderProps extends BasicProps {}

const sider = styled(({ ...props }: siderProps) => <Sider {...props} />)`
  background: white;
  padding: 0;
`;

export default sider;
