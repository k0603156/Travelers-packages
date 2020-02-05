/** @tsx tsx */
import React from "react";
import Layout, { Header, Content } from "../../../Base/Layout";
import { RangePicker } from "../../../Base/DatePicker";
import Button from "../../../Base/Button";
import Input from "../../../Base/Input";
import { Timeline, DatePicker, TimePicker, Icon, Col, Row, Avatar } from "antd";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "stories/board/left",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Board Left"
  }
};

export const BoardLeft = () => {
  return (
    <Layout style={{ boxShadow: "2px 2px 5px gray" }}>
      <Layout
        style={{ boxShadow: "2px 2px 5px gray", padding: "25px", zIndex: 10 }}
      >
        <Header heightauto>
          <Row>
            <Col span={8}>Travelers</Col>
            <Col span={16}>
              <Input value={"대만여행 3박 4일"} readOnly></Input>
            </Col>
          </Row>
        </Header>
        <Content>
          <Row>
            <Col span={12}>
              <label>출발일</label>
            </Col>
            <Col span={12}>
              <label>도착일</label>
            </Col>
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
        </Content>
      </Layout>
      <Layout style={{ padding: "25px" }}>
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
    </Layout>
  );
};

BoardLeft.story = {
  name: "board.left.all"
};

export const BoardHeader = () => {
  return (
    <Layout>
      <Header heightauto>
        <Row>
          <Col span={8}>Travelers</Col>
          <Col span={16}>
            <Input value={"대만여행 3박 4일"} readOnly></Input>
          </Col>
        </Row>
      </Header>
      <Content>
        <Row>
          <Col span={12}>
            <label>출발일</label>
          </Col>
          <Col span={12}>
            <label>도착일</label>
          </Col>
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
      </Content>
    </Layout>
  );
};
BoardHeader.story = {
  name: "board.left.header"
};

export const BoardScheduler = () => {
  return (
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
  );
};
BoardScheduler.story = {
  name: "board.left.scheduler"
};
