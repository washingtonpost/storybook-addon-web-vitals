import React from "react";
import { addons, types } from "@storybook/addons";

import { ADDON_ID } from "../constants";
import { WebVitalsMonitor } from "../WebVitalsMonitor";

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: "Web Vitals",
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === "story",
    render: () => <WebVitalsMonitor />,
  });
});
