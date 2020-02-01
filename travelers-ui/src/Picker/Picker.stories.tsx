/** @tsx tsx */
import React, { useState } from "react";
import Picker from "./Picker";
import styled from "styled-components";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/Picker/basePicker",
  component: Picker,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "피커 컴포넌트"
  }
};

export const datePicker = () => {
  const [date, setDate] = useState("");
  const width = text("width", "");
  return <Picker value={date} setValue={setDate} type="date" width={width} />;
};

datePicker.story = {
  name: "데이트피커"
};

export const timePicker = () => {
  const [date, setDate] = useState<Date>(new Date());
  const width = text("width", "");
  return <Picker value={date} setValue={setDate} type="time" width={width} />;
};

timePicker.story = {
  name: "타임피커"
};

export const dateTimePicker = () => {
  const [date, setDate] = useState<Date>(new Date());
  const width = text("width", "");
  return (
    <Picker value={date} setValue={setDate} type="dateTime" width={width} />
  );
};

dateTimePicker.story = {
  name: "데이트타임피커"
};
