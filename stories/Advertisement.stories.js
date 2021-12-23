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
  // create 100 Advertisement components
  const ads = Array.from({ length: 100 }).map((_, i) => (
    <Advertisement key={i} {...args} />
  ));

  return <>{ads}</>;
};

export const Primary = Template.bind({});
Primary.args = {};
