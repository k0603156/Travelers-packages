/** @tsx tsx */
import React from "react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import UserBox from "./index";
export default {
  title: "Components/molecules/UserMenu",
  parameters: {
    componentSubtitle: "Components/molecules/UserMenu"
  }
};
export const userMenu = () => {
  return <UserBox />;
};
userMenu.story = {
  name: "userMenu.default"
};
