/** @tsx tsx */
import React, { useState } from "react";
import Heading from "../Heading/Heading";
import styled from "styled-components";
import Picker from "../Picker/Picker";

export default {
  title: "stories/Board/StoryBox",
  parameters: {
    componentSubtitle: "스토리박스 컴포넌트"
  }
};

export const storyBox = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <div>
      <Heading type="h4" size="h6">
        타오위안 국제공항
      </Heading>
      <Picker value={date} setValue={setDate} type={"time"} />
    </div>
  );
};

storyBox.story = {
  name: "Default"
};
