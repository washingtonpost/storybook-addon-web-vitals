import { useEffect, useChannel } from "@storybook/addons";
import { STORY_CHANGED } from "@storybook/core-events";
import { EVENTS } from "./constants";
import { getLCP, getFID, getCLS } from "web-vitals";

export const withWebVitals = (StoryFn) => {
  const emit = useChannel({
    [EVENTS.REQUEST]: () => {
      emit(EVENTS.RESULT, []);
    },
    [STORY_CHANGED]: () => {
      emit(EVENTS.RESULT, []);
    },
    [EVENTS.CLEAR]: () => {
      emit(EVENTS.RESULT, []);
    },
  });

  const handleReport = ({ name, id, delta, value }) => {
    emit(EVENTS.RESULT, [{ name, id, delta, value }]);
  };

  useEffect(() => {
    getLCP(handleReport);
    getFID(handleReport);
    getCLS(handleReport, true);
  }, []);

  return StoryFn();
};
