/** @tsx tsx */
import React from "react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import TimelineList from "./index";
export default {
  title: "Components/organisms/List/TimelineList",
  component: TimelineList,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Components/organisms/List/TimelineList"
  }
};
export const body = () => {
  const plans = [
    {
      title: text("title1", "타오위안 국제공항"),
      date: text("date1", "")
    },
    {
      title: text("title2", "마라훠궈 시먼점, 마라딩지마라위엔양훠궈"),
      date: text("date2", "")
    }
  ].filter(plan => plan.title && true);

  return <TimelineList plans={plans} />;
};

body.story = {
  name: "timelineList.default"
};
