import React from "react";
import { Avatar, List } from "antd";

interface messageListProps {
  data: {
    title: string;
    description: string;
  }[];
}
export default function messageList(props: messageListProps) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={props.data}
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
  );
}
