/** @tsx tsx */
import React from "react";
import Container from "./Container";
import styled from "styled-components";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/Container/baseContainer",
  component: Container,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "컨테이너 컴포넌트"
  }
};

export const heading = () => {
  const label = text("label", "Container");
  const width = text("width", "100%");
  return <Container width={width}>{label}</Container>;
};

heading.story = {
  name: "Default"
};
