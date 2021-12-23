import React, { memo } from "react";
import { useChannel, useAddonState } from "@storybook/api";
import { ADDON_ID, EVENTS } from "./constants";
import { Badge } from "@storybook/components";

const green = "positive";
const red = "negative";

export const WebVitalsMonitor = memo(() => {
  const [results, setState] = useAddonState(ADDON_ID, []);

  const emit = useChannel({
    [EVENTS.RESULT]: (newResults) => setState(newResults),
  });

  React.useEffect(() => {
    emit(EVENTS.CLEAR);
    setState([]);
    emit(EVENTS.REQUEST);
  }, []);

  const getBadgeStatus = (vital) => {
    let background = green;
    if (vital.name === "CLS") {
      background = vital.value > 0.1 ? red : green;
    }

    if (vital.name === "FID") {
      background = vital.value > 100 ? red : green;
    }

    if (vital.name === "LCP") {
      background = vital.value > 2.5 ? red : green;
    }

    return background;
  };

  const getNormalizedValue = (value) => {
    return value && value.toFixed(2);
  };

  return (
    <>
      {results &&
        results.map((result) => {
          return (
            <Badge status={getBadgeStatus(result)} key={result.name}>
              Web Vitals {result.name}: {getNormalizedValue(result.value)}{" "}
            </Badge>
          );
        })}
    </>
  );
});
