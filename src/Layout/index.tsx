import React from "react";
import styled from "styled-components";
import { Layout } from "antd";
import { BasicProps } from "antd/es/layout/layout";
import Header from "./header";
import Content from "./content";

interface layoutProps extends BasicProps {}

const layout = styled(({ ...props }: layoutProps) => (
  <Layout {...props}></Layout>
))`
  background: white;
`;

export default layout;

export { Header, Content };
