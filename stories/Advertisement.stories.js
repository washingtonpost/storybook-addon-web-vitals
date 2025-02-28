import React from "react";

import { Advertisement } from "./Advertisement";

export default {
  title: "Example/Advertisement",
  component: Advertisement,
};

/**
 * create 100 Advertisement components
 */
const Template = (args) => {
  return <Advertisement {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
