/** @tsx tsx */
import React from "react";
import Timmer from "./Timmer";
import styled from "styled-components";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/Picker/Timmer/baseTimmer",
  component: Timmer,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "타이머 컴포넌트"
  }
};

export const timmer = () => {
  return <Timmer />;
};

timmer.story = {
  name: "Default"
};
