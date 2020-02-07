import React from "react";
import { Header } from "../../../atoms/Layout";
import { RangePicker } from "../../../atoms/DatePicker";
import { Input, Button, Logo } from "../../../atoms";
import moment from "moment";
import { Row, Col, Avatar } from "antd";

export default function header(props: {
  titleValue: string;
  isTitleEditable: boolean;
  startDate: string;
  endDate: string;
  members: string[];
}) {
  const startDate = moment(props.startDate, "YYYY/MM/DD");
  const endDate = moment(props.endDate, "YYYY/MM/DD");
  return (
    <Header style={{ height: "auto" }}>
      <Row>
        <Col span={6}>
          <a href="#">
            <Logo />
          </a>
        </Col>
        <Col span={18}>
          <Input
            value={props.titleValue}
            readOnly={props.isTitleEditable}
          ></Input>
        </Col>
      </Row>
      <Row style={{ lineHeight: "1rem", margin: "5px 0" }}>
        <Col span={12}>
          <label>출발일</label>
        </Col>
        <Col span={12}>
          <label>도착일</label>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <RangePicker
            placeholder={["출발일", "도착일"]}
            defaultValue={[startDate, endDate]}
            format={"YYYY/MM/DD"}
            block
          />
        </Col>
      </Row>
      <Row style={{ margin: "5px 0" }}>
        {props.members.map(member => (
          <Button>
            <Avatar size="small" icon="user" /> {member}
          </Button>
        ))}
      </Row>
    </Header>
  );
}
