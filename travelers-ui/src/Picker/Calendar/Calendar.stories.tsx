/** @tsx tsx */
import React from "react";
import Calendar from "./Calendar";
import styled from "styled-components";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/Picker/Calendar/baseCalendar",
  component: Calendar,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "캘린더 컴포넌트"
  }
};

export const calendar = () => {
  const width = text("width", "");
  return <Calendar width={width}></Calendar>;
};

calendar.story = {
  name: "Default"
};
