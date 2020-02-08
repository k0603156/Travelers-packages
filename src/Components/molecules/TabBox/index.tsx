import React from "react";
import { Tabs } from "antd";
interface TabBoxProps {
  tabList: {
    tabName: string;
    tabComponent: React.ReactNode;
  }[];
}
export default function tabBox(props: TabBoxProps) {
  const { TabPane } = Tabs;
  return (
    <Tabs defaultActiveKey="1">
      {props.tabList.map(({ tabName, tabComponent }) => (
        <TabPane tab={tabName} key={tabName}>
          {tabComponent}
        </TabPane>
      ))}
    </Tabs>
  );
}
