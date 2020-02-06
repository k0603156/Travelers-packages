import React from "react";
import Content from "./index";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";

export default {
  title: "Components/atoms/Layout/Content",
  component: Content,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Components/atoms/Layout"
  }
};

export const content = () => {
  return <Content>Header</Content>;
};

content.story = {
  name: "Layout.Content"
};
