/** @tsx tsx */
import React, { useState } from "react";
import Input from "../../Components/atoms/Input";
import Layout from "../../Components/atoms/Layout";
import { Button } from "antd/es";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Axios from "axios";

export default {
  title: "stories/register/signupForm",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "회원가입폼"
  }
};
export const signupForm = () => {
  const LOGIN_API = "http://1ca11b3d.ngrok.io/users/register/";
  const username = text("username", "");
  const password = text("password", "");
  const check = text("check", "");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Axios({
      method: "POST",
      headers: {},
      data: { username, password },
      url: LOGIN_API
    })
      .then(_ => console.log(_))
      .catch(error => console.log(error));
  };
  return (
    <Layout>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">username</label>
        <Input
          value={username}
          id="username"
          width={"100%"}
          autoComplete="off"
        />
        <label htmlFor="password">password</label>
        <Input
          value={password}
          id="password"
          width={"100%"}
          autoComplete="off"
        />
        <label htmlFor="check">check</label>
        <Input value={check} id="check" width={"100%"} autoComplete="off" />
        <Button htmlType="submit">회원가입</Button>
        <Button htmlType="button">CLEAR</Button>
      </form>
    </Layout>
  );
};

signupForm.story = {
  name: "register.signupForm"
};
