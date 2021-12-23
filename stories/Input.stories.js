/**
 * create a storybook story for Input
 */
import React from "react";

import { Input } from "./Input";

export default {
  title: "Example/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
