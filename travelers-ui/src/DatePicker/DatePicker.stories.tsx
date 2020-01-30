/** @tsx tsx */
import React from "react";
import DatePicker from "./DatePicker";
import styled from "styled-components";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/DatePicker/baseDatePicker",
  component: DatePicker,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "데이트피커 컴포넌트"
  }
};

export const datepicker = () => {
  const condition = select(
    "condition",
    ["primary", "secondary", "tertiary"],
    "primary"
  );
  const width = text("width", "");
  const disabled = boolean("disabled", false);
  const type = select("type", ["text", "date", "password"], "text");
  return (
    <DatePicker
      condition={condition}
      width={width}
      disabled={disabled}
    ></DatePicker>
  );
};

datepicker.story = {
  name: "Default"
};
