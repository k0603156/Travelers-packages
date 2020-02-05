import React from "react";
import Input from "./index";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";

export default {
  title: "base/Input",
  component: Input,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "base/Input component"
  }
};

export const input = () => {
  return <Input />;
};

input.story = {
  name: "Input.default"
};
