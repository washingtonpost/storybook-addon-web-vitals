import React, { memo } from "react";
import { useChannel, useAddonState, useEffect } from "@storybook/manager-api";
import { ADDON_ID, EVENTS } from "./constants";
import { Badge } from "@storybook/components";

const green = "positive";
const red = "negative";

const initialState = {
  CLS: {},
  INP: {},
  LCP: {},
};

export const WebVitalsMonitor = memo(() => {
  const [results, setState] = useAddonState(ADDON_ID, initialState);

  const emit = useChannel({
    [EVENTS.RESULT]: (newResult) => {
      if (newResult.name) {
        console.log({ newResult }); // keeping for debugging in consuming storybooks
        setState((prevState) => handleNewResults(prevState, newResult));
      }
    },
  });

  const handleNewResults = (oldResults, newResult) => {
    const newEntry = { [newResult.name]: newResult };
    return { ...oldResults, ...newEntry };
  };

  // If CLS shift, highlight the element
  React.useEffect(() => {
    const targetSelector = results?.CLS?.attribution?.largestShiftTarget;
    if (targetSelector) {
      const storybookIframe = document.getElementById(
        "storybook-preview-iframe"
      );
      const targetElements =
        storybookIframe.contentDocument.querySelectorAll(targetSelector);
      targetElements.forEach((element) => {
        element.style.border = "2px dashed lightblue";
      });
    }
  }, [results.CLS]);

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

    if (vital.name === "INP") {
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
        Object.keys(results).map((resultName) => {
          return (
            <Badge
              status={getBadgeStatus(results[resultName])}
              key={resultName}
            >
              Web Vitals {resultName}:{" "}
              {getNormalizedValue(results[resultName].value)}{" "}
            </Badge>
          );
        })}
    </>
  );
});
