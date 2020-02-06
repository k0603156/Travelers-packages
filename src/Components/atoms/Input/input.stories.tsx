import React from "react";
import Input from "./index";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";

export default {
  title: "Components/atoms/Input",
  component: Input,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Components/atoms/Input"
  }
};

export const input = () => {
  return <Input />;
};

input.story = {
  name: "Input.default"
};
