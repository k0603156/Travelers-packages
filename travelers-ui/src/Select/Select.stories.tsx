/** @tsx tsx */
import React from "react";
import Select from "./Select";
import Option from "../Option/Option";
import styled from "styled-components";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/Select/baseSelect",
  component: Select,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "셀렉트 컴포넌트"
  }
};

export const button = () => {
  const condition = select(
    "condition",
    ["primary", "secondary", "tertiary"],
    "primary"
  );
  const width = text("width", "");
  const SelectDisabled = boolean("SelectDisabled", false);
  const Option1Disabled = boolean("Option1Disabled", false);
  const Option2Disabled = boolean("Option2Disabled", false);
  return (
    <Select condition={condition} width={width} disabled={SelectDisabled}>
      <Option disabled={Option1Disabled}>Option</Option>
      <Option disabled={Option2Disabled}>Option</Option>
    </Select>
  );
};

button.story = {
  name: "Default"
};
export const primaryButton = () => {
  return (
    <Select>
      <Option>Option</Option>
      <Option>Option</Option>
      <Option>Option</Option>
    </Select>
  );
};
export const secondaryButton = () => {
  return (
    <Select condition="secondary">
      <Option>Option</Option>
      <Option>Option</Option>
      <Option>Option</Option>
    </Select>
  );
};
export const tertiaryButton = () => {
  return (
    <Select condition="tertiary">
      <Option>Option</Option>
      <Option>Option</Option>
      <Option>Option</Option>
    </Select>
  );
};
