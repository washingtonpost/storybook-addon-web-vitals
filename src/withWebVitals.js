import { useEffect, useChannel } from "@storybook/addons";
import { EVENTS } from "./constants";

export const withWebVitals = (StoryFn, context) => {
  const emit = useChannel({}, []);

  useEffect(() => {
    let cumulativeLayoutShiftScore = 0;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Only count layout shifts without recent user input.
        if (!entry.hadRecentInput) {
          cumulativeLayoutShiftScore += entry.value;
          emit(EVENTS.RESULT, {
            name: "CLS",
            value: cumulativeLayoutShiftScore || 2,
          });
        }
      }
    });

    try {
      observer.observe({ type: "layout-shift", buffered: true });

      // Force any pending records to be dispatched.
      observer.takeRecords();
    } catch (e) {
      // Do nothing if the browser doesn't support this API.
    }

    return () => {
      observer.disconnect();
      console.log("shutting down");
    };
  }, []);

  return StoryFn();
};
