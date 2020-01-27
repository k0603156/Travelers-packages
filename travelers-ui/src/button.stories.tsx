import React from "react";
import Button from "./Button";
import { withKnobs, select } from "@storybook/addon-knobs";

export default {
  title: "components|Button/baseButton",
  component: Button,
  decorators: [withKnobs]
};

export const button = () => {
  const condition = select(
    "condition",
    ["primary", "secondary", "tertiary"],
    "primary"
  );
  const size = select("size", ["small", "medium", "large"], "medium");
  return (
    <Button condition={condition} size={size}>
      PRIMARY
    </Button>
  );
};
button.story = {
  name: "Default"
};
