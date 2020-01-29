/** @tsx tsx */
import React from "react";
import Option from "./Option";
import styled from "styled-components";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/Option/baseOption",
  component: Option,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "옵션 컴포넌트"
  }
};

export const option = () => {
  const label = text("label", "Option");
  const disabled = boolean("disabled", false);
  return <Option disabled={disabled}>{label}</Option>;
};

option.story = {
  name: "Default"
};
export const primaryoption = () => {
  return <Option>PRIMARY</Option>;
};
export const secondaryoption = () => {
  return <Option condition="secondary">SECONDARY</Option>;
};
export const tertiaryoption = () => {
  return <Option condition="tertiary">TERTIARY</Option>;
};
