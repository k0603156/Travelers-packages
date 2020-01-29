/** @tsx tsx */
import React from "react";
import Heading from "./Heading";
import styled from "styled-components";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/Heading/baseHeading",
  component: Heading,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "헤딩 컴포넌트"
  }
};

export const heading = () => {
  const label = text("label", "Heading");
  const size = select("size", ["h1", "h2", "h3", "h4", "h5", "h6"], "h3");
  return <Heading size={size}>{label}</Heading>;
};

heading.story = {
  name: "Default"
};
