import React from "react";
import { Header } from "../../../atoms/Layout";
import { Input } from "../../../atoms";
import { Col } from "antd";

export default function header(props: { titleValue: string }) {
  return (
    <Header style={{ display: "flex" }}>
      <Col span={6}>Travelers</Col>
      <Col span={18}>
        <Input value={props.titleValue} readOnly></Input>
      </Col>
    </Header>
  );
}
