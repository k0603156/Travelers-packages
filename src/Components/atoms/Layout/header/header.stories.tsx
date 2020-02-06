import React from "react";
import Header from "./index";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";

export default {
  title: "Components/atoms/Layout/Header",
  component: Header,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Components/atoms/Layout"
  }
};

export const header = () => {
  return <Header>Header</Header>;
};

header.story = {
  name: "Layout.Header"
};
