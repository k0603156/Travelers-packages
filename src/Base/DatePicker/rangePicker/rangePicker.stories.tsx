import React from "react";
import RangePicker from "./index";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";

export default {
  title: "base/DatePicker/rangePicker",
  component: RangePicker,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "base/DatePicker/RangePicker component"
  }
};

export const rangePicker = () => {
  return <RangePicker />;
};

rangePicker.story = {
  name: "DatePicker.rangePicker"
};
