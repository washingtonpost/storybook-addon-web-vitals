import { useEffect, useChannel } from "@storybook/preview-api";
import { STORY_CHANGED } from "@storybook/core-events";
import { EVENTS } from "./constants";
import { onLCP, onINP, onCLS } from "web-vitals/attribution";

export const withWebVitals = (StoryFn) => {
  const emit = useChannel({
    [EVENTS.REQUEST]: () => {
      emit(EVENTS.RESULT, {});
    },
    [STORY_CHANGED]: () => {
      emit(EVENTS.RESULT, {});
    },
    [EVENTS.CLEAR]: () => {
      emit(EVENTS.RESULT, {});
    },
  });

  const handleReport = (data) => {
    emit(EVENTS.RESULT, data);
  };

  useEffect(() => {
    onLCP(handleReport, { reportAllChanges: true });
    onINP(handleReport, { reportAllChanges: true });
    onCLS(handleReport, { reportAllChanges: true });
  }, []);

  return StoryFn();
};
