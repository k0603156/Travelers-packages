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
  const [data, setData] = useState({ date: "" });
  const width = text("width", "");
  const onChangeValue = ({ date, time }: { date: string; time: string }) => {
    setData({ ...data, date });
  };
  return (
    <Picker
      value={data}
      onChangeValue={onChangeValue}
      type="date"
      width={width}
    />
  );
};

datePicker.story = {
  name: "데이트피커"
};

export const timePicker = () => {
  const [data, setData] = useState({ time: "00:00" });
  const width = text("width", "");
  const onChangeValue = ({ date, time }: { date: string; time: string }) => {
    setData({ ...data, time });
  };
  return (
    <Picker
      value={data.time}
      onChangeValue={onChangeValue}
      type="time"
      width={width}
    />
  );
};

timePicker.story = {
  name: "타임피커"
};

export const dateTimePicker = () => {
  const [data, setData] = useState({ date: "", time: "00:00" });
  const width = text("width", "");
  const onChangeValue = ({ date, time }: { date: string; time: string }) => {
    date && setData({ ...data, date });
    time && setData({ ...data, time });
  };
  return (
    <Picker
      value={`${data.date} - ${data.time}`}
      onChangeValue={onChangeValue}
      type="dateTime"
      width={width}
    />
  );
};

dateTimePicker.story = {
  name: "데이트타임피커"
};
