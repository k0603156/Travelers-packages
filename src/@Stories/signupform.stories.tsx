/** @tsx tsx */
import React, { useState } from "react";
import Input from "../Input/input";
import { Button } from "antd/es";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Axios from "axios";

export default {
  title: "stories/인증/회원가입폼",
  parameters: {
    componentSubtitle: "회원가입폼"
  }
};
export const signupForm = () => {
  const initialState = {
    username: "",
    password: "",
    check: ""
  };
  const [state, setState] = useState(initialState);
  const LOGIN_API = "http://ee87b42b.ngrok.io/users/register/";
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.id]: event.target.value });
  };
  const clearForm = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setState(initialState);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      <label htmlFor="username">userName</label>
      <Input
        value={state.username}
        onChange={onChange}
        id="username"
        width={"100%"}
        autoComplete="off"
      />
      <label htmlFor="password">password</label>
      <Input
        value={state.password}
        onChange={onChange}
        id="password"
        width={"100%"}
        autoComplete="off"
      />
      <label htmlFor="check">check</label>
      <Input
        value={state.check}
        onChange={onChange}
        id="check"
        width={"100%"}
        autoComplete="off"
      />
      <Button htmlType="submit">회원가입</Button>
      <Button htmlType="button" onClick={clearForm}>
        CLEAR
      </Button>
    </form>
  );
};

signupForm.story = {
  name: "회원가입폼"
};
