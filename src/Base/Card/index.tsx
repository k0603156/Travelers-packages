import React from "react";
import styled from "styled-components";
import { Skeleton, Switch, Card, Icon, Avatar } from "antd";
import { CardProps, CardMetaProps } from "antd/es/card/";

const CardComponent = styled(Card)<CardProps>`
  width: 300;
  margin-top: 16;
`;

const MetaComponent = styled(Card.Meta)<CardMetaProps>``;
const card = () => {
  const loading = false;
  return (
    <CardComponent
      actions={[
        <Icon type="setting" key="setting" />,
        <Icon type="edit" key="edit" />,
        <Icon type="ellipsis" key="ellipsis" />
      ]}
    >
      <Skeleton loading={loading} avatar active>
        <MetaComponent
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Card title"
          description="This is the description"
        />
      </Skeleton>
    </CardComponent>
  );
};
export default card;
