import React from "react";
import styled from "styled-components";
import { Tabs, Input } from "antd";
interface TabBoxProps {
  tabList: {
    tabName: string;
    tabComponent: React.ReactNode;
  }[];
}

const CTabs = styled(Tabs)`
  border-top: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  height: 100%;
  .ant-tabs-top-bar {
    margin-bottom: 0;
  }
  .ant-tabs-content {
    overflow: scroll;
  }
`;
export default function tabBox(props: TabBoxProps) {
  return (
    <>
      <CTabs defaultActiveKey="1">
        {props.tabList.map(({ tabName, tabComponent }) => (
          <Tabs.TabPane tab={tabName} key={tabName}>
            {tabComponent}
          </Tabs.TabPane>
        ))}
      </CTabs>
    </>
  );
}
