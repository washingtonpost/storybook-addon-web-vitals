import React from "react";

import { Advertisement } from "./Advertisement";
import { Input } from "./Input";

export default {
  title: "Examples",
};

const Template = (args) => (
  <>
    <Input {...args} />
    <Advertisement {...args} />
  </>
);

export const Primary = Template.bind({});
Primary.args = {};
