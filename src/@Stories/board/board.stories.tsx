/** @tsx tsx */
import React from "react";
import Layout, { Header, Content, Sider } from "../../Components/atoms/Layout";
import { RangePicker } from "../../Components/atoms/DatePicker";
import { PlannerHeader } from "../../Components/organisms/Header";
import Button from "../../Components/atoms/Button";
import Input from "../../Components/atoms/Input";
import Card from "../../Components/atoms/Card";
import TabBox from "../../Components/molecules/TabBox";
import { MessageList } from "../../Components/organisms/List";
import {
  Timeline,
  DatePicker,
  TimePicker,
  Icon,
  Col,
  Row,
  Avatar,
  List
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

const tabList = [
  {
    tabName: "tab1",
    tabComponent: <MessageList data={data} />
  },
  {
    tabName: "tab2",
    tabComponent: <div>22</div>
  }
];

export const Board = () => {
  const titleValue = text("titleValue", "대만여행 3박 4일");
  const isTitleEditable = boolean("isTitleEditable", true);
  const startDate = text("startDate", "2019/01/01");
  const endDate = text("endDate", "2019/01/03");
  const members = [
    text("member", ""),
    text("member2", ""),
    text("member3", "")
  ].filter(member => member);
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
        <PlannerHeader
          titleValue={titleValue}
          isTitleEditable={isTitleEditable}
          startDate={startDate}
          endDate={endDate}
          members={members}
        />
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
        <TabBox tabList={tabList}></TabBox>
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
