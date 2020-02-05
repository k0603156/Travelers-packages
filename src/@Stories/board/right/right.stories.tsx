/** @tsx tsx */
import React from "react";
import { List } from "antd";
import Card from "../../../Base/Card";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
export default {
  title: "stories/board/right",
  parameters: {
    componentSubtitle: "Board Right"
  }
};
export const Right = () => {
  return (
    <List>
      <Card /> <Card />
      <Card /> <Card />
      <Card /> <Card />
      <Card /> <Card />
    </List>
  );
};
Right.story = {
  name: "board.right"
};
