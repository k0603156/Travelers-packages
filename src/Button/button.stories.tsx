import React from "react";
import Button from "./index";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";

export default {
  title: "components/Button",
  component: Button,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Button component"
  }
};

export const button = () => {
  const label = text("label", "Button");
  return <Button>{label}</Button>;
};

button.story = {
  name: "Button.default"
};
