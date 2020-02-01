/** @tsx tsx */
import React from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Button from "../Button/Button";
import Container from "../Container/Container";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "stories/Login/LoginForm",
  parameters: {
    componentSubtitle: "로그인폼"
  }
};
export const loginForm = () => {
  const onSubmit = e => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <Label htmlFor="userName">userName</Label>
      <Input id="userName" width={"100%"} />
      <Label htmlFor="password">password</Label>
      <Input id="password" width={"100%"} />
      <Button type="submit">로그인</Button>
    </form>
  );
};

loginForm.story = {
  name: "Default"
};
