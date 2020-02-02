/** @tsx tsx */
import React, { useState } from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Button from "../Button/Button";
import Container from "../Container/Container";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Axios from "axios";

export default {
  title: "stories/Login/LoginForm",
  parameters: {
    componentSubtitle: "로그인폼"
  }
};
export const loginForm = () => {
  const [state, setState] = useState({
    username: "",
    password: ""
  });
  const LOGIN_API = "http://ee87b42b.ngrok.io/users/register/";
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.id]: event.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    Axios({
      method: "POST",
      headers: {},
      data: state,
      url: LOGIN_API
    })
      .then(_ => console.log(_))
      .catch(error => console.log(error));
  };
  return (
    <form onSubmit={onSubmit}>
      <Label htmlFor="username">userName</Label>
      <Input
        value={state.username}
        onChange={onChange}
        id="username"
        width={"100%"}
      />
      <Label htmlFor="password">password</Label>
      <Input
        value={state.password}
        onChange={onChange}
        id="password"
        width={"100%"}
      />
      <Button type="submit">로그인</Button>
    </form>
  );
};

loginForm.story = {
  name: "Default"
};
