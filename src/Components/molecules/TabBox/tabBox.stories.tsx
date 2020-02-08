/** @tsx tsx */
import React from "react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import TabBox from "./index";
export default {
  title: "Components/molecules/tabBox",
  parameters: {
    componentSubtitle: "Components/molecules/tabBox"
  }
};
export const tabBox = () => {
  const tabList = [
    {
      tabName: "tab1",
      tabComponent: <div>1</div>
    },
    {
      tabName: "tab2",
      tabComponent: <div>2</div>
    }
  ];
  return <TabBox tabList={tabList} />;
};
tabBox.story = {
  name: "tabBox.default"
};
