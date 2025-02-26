import React from "react";

import { ColumnAd } from "./ColumnAd";

export default {
  title: "Example/ColumnAd",
  component: ColumnAd,
};

/**
 * create 100 Advertisement components
 */
const Template = (args) => {
  return <ColumnAd {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
