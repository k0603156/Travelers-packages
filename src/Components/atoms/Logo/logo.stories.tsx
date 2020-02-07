import React from "react";
import Logo from "./index";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";

export default {
  title: "Components/atoms/Logo",
  component: Logo,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Components/atoms/Logo"
  }
};

export const logo = () => {
  return <Logo />;
};

logo.story = {
  name: "Logo.default"
};
