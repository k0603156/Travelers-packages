/** @tsx tsx */
import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/Button/baseButton",
  component: Button,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "버튼 컴포넌트"
  }
};

export const button = () => {
  const label = text("label", "Button");
  const condition = select(
    "condition",
    ["primary", "secondary", "tertiary"],
    "primary"
  );
  const size = select("size", ["small", "medium", "large"], "medium");
  const width = text("width", "");
  const disabled = boolean("disabled", false);
  return (
    <Button
      condition={condition}
      onClick={action("onClick")}
      size={size}
      width={width}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

button.story = {
  name: "Default"
};
export const primaryButton = () => {
  return <Button>PRIMARY</Button>;
};
export const secondaryButton = () => {
  return <Button condition="secondary">SECONDARY</Button>;
};
export const tertiaryButton = () => {
  return <Button condition="tertiary">TERTIARY</Button>;
};

const ButtonWrapper = styled.div`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;
export const sizes = () => {
  return (
    <ButtonWrapper>
      <div>
        <div className="description">Small</div>
        <Button size="small">BUTTON</Button>
      </div>
      <div>
        <div className="description">Medium</div>
        <Button size="medium">BUTTON</Button>
      </div>
      <div>
        <div className="description">Big</div>
        <Button size="large">BUTTON</Button>
      </div>
    </ButtonWrapper>
  );
};
