import React from "react";
import Layout from "../../../atoms/Layout";
import DatePicker from "../../../atoms/DatePicker";
import { Timeline, Icon, TimePicker } from "antd";

interface TimelineListProps {
  plans: { title: string; date: string }[];
}
export default function timelineList({ plans }: TimelineListProps) {
  return (
    <Layout style={{ padding: "25px" }}>
      <Timeline>
        {plans.map(({ title, date }) => (
          <Timeline.Item color="black" key={title + date}>
            <div>{title}</div>
            <div>
              <DatePicker size="small" />
            </div>
            <div>
              <TimePicker use12Hours format="h:mm A" size="small" />
            </div>
          </Timeline.Item>
        ))}
      </Timeline>
    </Layout>
  );
}
