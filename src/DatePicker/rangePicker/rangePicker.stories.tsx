import React from "react";
import RangePicker from "./index";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";

export default {
  title: "components/DatePicker/rangePicker",
  component: RangePicker,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "DatePicker/RangePicker component"
  }
};

export const rangePicker = () => {
  return <RangePicker />;
};

rangePicker.story = {
  name: "DatePicker.rangePicker"
};
