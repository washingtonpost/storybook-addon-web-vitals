import React from "react";

import { Advertisement } from "./Advertisement";

export default {
  title: "Example/Advertisement",
  component: Advertisement,
};

const Template = (args) => <Advertisement {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
