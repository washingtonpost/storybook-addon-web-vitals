export const PARAM_KEY = `web-vitals`;
export const TOOL_ID = `storybook/tool/${PARAM_KEY}`;
export const ADDON_ID = `storybook/${PARAM_KEY}`;
export const PANEL_ID = `${ADDON_ID}/panel`;

const RESULT = `${ADDON_ID}/result`;
const REQUEST = `${ADDON_ID}/request`;
const RUNNING = `${ADDON_ID}/running`;
const MANUAL = `${ADDON_ID}/manual`;
const ERROR = `${ADDON_ID}/error`;
const CLEAR = `${ADDON_ID}/clear`;

export const EVENTS = { RESULT, REQUEST, RUNNING, MANUAL, ERROR, CLEAR };
