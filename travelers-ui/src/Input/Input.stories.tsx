/** @tsx tsx */
import React from "react";
import Input from "./Input";
import styled from "styled-components";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/Input/baseInput",
  component: Input,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "인풋 컴포넌트"
  }
};

export const input = () => {
  const condition = select(
    "condition",
    ["primary", "secondary", "tertiary"],
    "primary"
  );
  const width = text("width", "");
  const disabled = boolean("disabled", false);
  const type = select("type", ["text", "date", "password"], "text");
  return (
    <Input
      condition={condition}
      width={width}
      disabled={disabled}
      type={type}
    ></Input>
  );
};

input.story = {
  name: "Default"
};
