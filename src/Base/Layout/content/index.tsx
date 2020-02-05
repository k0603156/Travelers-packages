import React from "react";
import styled from "styled-components";
import { Layout } from "antd";
import { BasicProps } from "antd/es/layout/layout";

const { Content } = Layout;

interface contentProps extends BasicProps {}

const content = styled(({ ...props }: contentProps) => <Content {...props} />)`
  background: white;
`;

export default content;
