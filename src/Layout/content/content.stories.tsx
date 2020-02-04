import React from "react";
import Content from "./index";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";

export default {
  title: "components/Layout/Content",
  component: Content,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Layout Content Component"
  }
};

export const content = () => {
  return <Content>Header</Content>;
};

content.story = {
  name: "Layout.Content"
};
