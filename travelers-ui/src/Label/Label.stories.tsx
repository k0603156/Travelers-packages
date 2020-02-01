/** @tsx tsx */
import React from "react";
import Label from "./Label";
import styled from "styled-components";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/Label/baseLabel",
  component: Label,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "라벨 컴포넌트"
  }
};

export const label = () => {
  const label = text("label", "Label");
  return <Label>{label}</Label>;
};

label.story = {
  name: "Default"
};
