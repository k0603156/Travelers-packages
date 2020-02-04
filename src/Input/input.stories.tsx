import React from "react";
import Input from "./index";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";

export default {
  title: "components/Input",
  component: Input,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Input component"
  }
};

export const input = () => {
  return <Input />;
};

input.story = {
  name: "Input.default"
};
