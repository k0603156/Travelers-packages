/** @tsx tsx */
import React, { useState } from "react";
import Input from "../../Components/atoms/Input";
import { Button } from "antd/es";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Axios from "axios";

export default {
  title: "stories/register/signinForm",
  parameters: {
    componentSubtitle: "로그인폼"
  }
};
const LOGIN_API = "http://ee87b42b.ngrok.io/users/register/";

export const signinForm = () => {
  const initialState = {
    username: "",
    password: ""
  };
  const [state, setState] = useState(initialState);

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
      <Button htmlType="submit">로그인</Button>
      <Button htmlType="button" onClick={clearForm}>
        CLEAR
      </Button>
    </form>
  );
};

signinForm.story = {
  name: "register.signinForm"
};
