/** @tsx tsx */
import React from "react";
import Layout, { Header, Content, Sider } from "../../Components/atoms/Layout";
import { RangePicker } from "../../Components/atoms/DatePicker";
import Button from "../../Components/atoms/Button";
import Input from "../../Components/atoms/Input";
import Card from "../../Components/atoms/Card";
import {
  Timeline,
  DatePicker,
  TimePicker,
  Icon,
  Col,
  Row,
  Avatar,
  List,
  Tabs
} from "antd";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "stories/board",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Board"
  }
};
const data = [
  {
    title: "이지찬",
    description: "ㅂㅂㅂㅂㅂ"
  },
  {
    title: "정진환",
    description: "ㅂㅂㅂㅂㅂ"
  },
  {
    title: "김용국",
    description: "ㅂㅂㅂㅂㅂ"
  },
  {
    title: "김용국",
    description: "ㅂㅂㅂㅂㅂ"
  }
];
export const Board = () => {
  const { TabPane } = Tabs;
  return (
    <Row style={{ display: "flex", height: "100vh" }}>
      <Sider
        style={{
          display: "flex",
          flexDirection: "column",
          width: "auto",
          padding: "0 25px",
          boxShadow: "2px 2px 5px gray"
        }}
      >
        <Header style={{ display: "flex" }}>
          <Col span={6}>Travelers</Col>
          <Col span={18}>
            <Input value={"대만여행 3박 4일"} readOnly></Input>
          </Col>
        </Header>
        <div>
          <Row>
            <Col span={12}>
              <label>출발일</label>
            </Col>
            <Col span={12}>
              <label>도착일</label>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <RangePicker placeholder={["출발일", "도착일"]} block />
            </Col>
          </Row>
          <Row>
            <Button>
              <Avatar size="small" icon="user" /> {"김용국"}
            </Button>

            <Button>
              <Avatar size="small" icon="user" /> {"정진환"}
            </Button>

            <Button>
              <Avatar size="small" icon="user" /> {"이지찬"}
            </Button>
          </Row>
        </div>
        <Layout>
          <Timeline>
            <Timeline.Item color="black">
              <div>타오위안 국제공항</div>
              <div>
                <DatePicker size="small" />
              </div>
              <div>
                <TimePicker use12Hours format="h:mm A" size="small" />
              </div>
            </Timeline.Item>
            <Timeline.Item
              color="black"
              dot={<Icon type="check-circle" style={{ fontSize: "16px" }} />}
            >
              <div>마라훠궈 시먼점, 마라딩지마라위엔양훠궈</div>
              <div>
                <DatePicker size="small" />
              </div>
              <div>
                <TimePicker use12Hours format="h:mm A" size="small" />
              </div>
            </Timeline.Item>
          </Timeline>
        </Layout>
      </Sider>
      <Col span={8}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Chat" key="1">
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item style={{ padding: "10px" }}>
                  <List.Item.Meta
                    avatar={<Avatar src="" icon="user" />}
                    title={item.title}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab="MyBoard" key="2"></TabPane>
        </Tabs>
      </Col>
      <Col
        span={8}
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div>usermenu</div>
        <Input style={{ flexBasis: "30px" }} />
        <List style={{ flex: 1, overflow: "scroll" }}>
          <Card /> <Card />
          <Card /> <Card />
          <Card /> <Card />
          <Card /> <Card />
        </List>
      </Col>
    </Row>
  );
};

Board.story = {
  name: "board"
};
