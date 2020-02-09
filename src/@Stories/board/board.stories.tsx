/** @tsx tsx */
import React from "react";
import styled from "styled-components";
import Layout, { Header, Content } from "../../Components/atoms/Layout";
import UserMenu from "../../Components/molecules/UserMenu";
import { PlannerHeader } from "../../Components/organisms/Header";
import TabBox from "../../Components/molecules/TabBox";
import {
  MessageList,
  TimelineList,
  LocationList
} from "../../Components/organisms/List";
import { Col, Input } from "antd";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "stories/board",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Board"
  }
};
const Container = styled(Content)`
  display: flex;
  height: calc(100vh - 64px);
`;
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
  },
  {
    title: "김용국",
    description: "ㅂㅂㅂㅂㅂ"
  },
  {
    title: "김용국",
    description: "ㅂㅂㅂㅂㅂ"
  },
  {
    title: "김용국",
    description: "ㅂㅂㅂㅂㅂ"
  },
  {
    title: "김용국",
    description: "ㅂㅂㅂㅂㅂ"
  },
  {
    title: "김용국",
    description: "ㅂㅂㅂㅂㅂ"
  },
  {
    title: "김용국",
    description: "ㅂㅂㅂㅂㅂ"
  },
  {
    title: "김용국",
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

const plans = [{ title: "ss", date: "2019-01-01" }];
const tabList = [
  {
    tabName: "채팅",
    tabComponent: <MessageList data={data} />
  },
  {
    tabName: "메모",
    tabComponent: <div>22</div>
  }
];

export const Board = () => {
  const titleValue = text("titleValue", "대만여행 3박 4일");
  const isTitleEditable = boolean("isTitleEditable", true);
  const startDate = text("startDate", "2019/01/01");
  const endDate = text("endDate", "2019/01/03");
  const members = [
    text("member1", "kimyongkuk"),
    text("member2", "jinhwanjeong"),
    text("member3", "")
  ].filter(member => member);
  return (
    <Layout style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <div
        style={{
          minWidth: "400px",
          boxShadow: "2px 2px 5px gray",
          zIndex: 10
        }}
      >
        <PlannerHeader
          titleValue={titleValue}
          isTitleEditable={isTitleEditable}
          startDate={startDate}
          endDate={endDate}
          members={members}
        />
        <TimelineList plans={plans} />
      </div>
      <div
        style={{
          flex: 1,
          minWidth: "800px",
          height: "100vh"
        }}
      >
        <Header
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "0 10px"
          }}
        >
          <UserMenu />
        </Header>
        <Container>
          <Col span={12}>
            <TabBox tabList={tabList} />
          </Col>
          <Col span={12}>
            <LocationList />
          </Col>
        </Container>
      </div>
    </Layout>
  );
};

Board.story = {
  name: "board"
};
