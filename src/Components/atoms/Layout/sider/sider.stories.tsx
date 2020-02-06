import React from "react";
import Sider from "./index";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";

export default {
  title: "Components/atoms/Layout/Sider",
  component: Sider,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Components/atoms/Layout"
  }
};

export const sider = () => {
  return <Sider>Header</Sider>;
};

sider.story = {
  name: "Layout.Sider"
};
