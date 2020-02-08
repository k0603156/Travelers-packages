/** @tsx tsx */
import React from "react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
export default {
  title: "Components/organisms/Header/UserHeader",
  parameters: {
    componentSubtitle: "Components/organisms/Header/UserHeader"
  }
};
export const userHeader = () => {
  return <div>user</div>;
};
userHeader.story = {
  name: "userHeader.default"
};
