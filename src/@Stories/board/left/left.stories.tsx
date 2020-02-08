/** @tsx tsx */
import React from "react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { PlannerHeader } from "../../../Components/organisms/Header";
import { TimelineList } from "../../../Components/organisms/List";
export default {
  title: "stories/board/left",
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Board Left"
  }
};

export const BoardLeft = () => {
  const titleValue = text("titleValue", "대만여행 3박 4일");
  const isTitleEditable = boolean("isTitleEditable", true);
  const startDate = text("startDate", "2019/01/01");
  const endDate = text("endDate", "2019/01/03");
  const members = [
    text("member", ""),
    text("member2", ""),
    text("member3", "")
  ].filter(member => member);

  return (
    <>
      <PlannerHeader
        titleValue={titleValue}
        isTitleEditable={isTitleEditable}
        startDate={startDate}
        endDate={endDate}
        members={members}
      />
      {/* <TimelineList /> */}
    </>
  );
};

BoardLeft.story = {
  name: "board.left"
};
