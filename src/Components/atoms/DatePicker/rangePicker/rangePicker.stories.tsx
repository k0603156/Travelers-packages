import React from "react";
import RangePicker from "./index";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";

export default {
  title: "Components/atoms/DatePicker/rangePicker",
  component: RangePicker,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Components/atoms/DatePicker/rangePicker"
  }
};

export const rangePicker = () => {
  return <RangePicker />;
};

rangePicker.story = {
  name: "DatePicker.rangePicker"
};
