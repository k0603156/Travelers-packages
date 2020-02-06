/** @tsx tsx */
import React from "react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import PlannerHeader from "./index";
export default {
  title: "Components/organisms/Planner/header",
  component: PlannerHeader,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Components/organisms/Planner/header"
  }
};
export const header = () => {
  const titleValue = text("titleValue", "대만여행 3박 4일");
  return <PlannerHeader titleValue={titleValue} />;
};
header.story = {
  name: "planner.header.default"
};
