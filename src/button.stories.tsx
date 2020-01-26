import React from "react";
import Button from "./Button";

export default {
  title: "components|Button",
  component: Button
};

export const button = () => {
  return <Button>BUTTON</Button>;
};

button.story = {
  name: "Default"
};

export const primaryButton = () => {
  return <Button>PRIMARY</Button>;
};

export const secondaryButton = () => {
  return <Button theme="secondary">SECONDARY</Button>;
};

export const tertiaryButton = () => {
  return <Button theme="tertiary">TERTIARY</Button>;
};
