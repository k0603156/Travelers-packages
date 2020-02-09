import React from "react";
import styled from "styled-components";
import Input from "../../../atoms/Input";
import Card from "../../../atoms/Card";
import { List } from "antd";
const CardList = styled(List)`
  height: 100%;
  overflow: scroll;
`;
export default function locationList() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        height: "100%",
        flexDirection: "column"
      }}
    >
      <Input
        placeholder="검색"
        style={{
          height: "45px"
        }}
      />
      <CardList style={{ flex: 1 }}>
        <Card /> <Card />
        <Card /> <Card />
        <Card /> <Card />
        <Card /> <Card />
      </CardList>
    </div>
  );
}
