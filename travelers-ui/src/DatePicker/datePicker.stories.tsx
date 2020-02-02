import React from "react";
import DatePicker from "./datePicker";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";

export default {
  title: "components/datePicker",
  component: DatePicker,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "DatePicker component"
  }
};

export const datePicker = () => {
  return <DatePicker />;
};

datePicker.story = {
  name: "Default"
};
