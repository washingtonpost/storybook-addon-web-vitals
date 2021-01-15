import React, { memo } from "react";
import { useChannel, useAddonState } from "@storybook/api";
import { ADDON_ID, EVENTS } from "./constants";
import { Badge } from "@storybook/components";

const green = "positive";
const red = "negative";

export const WebVitalsMonitor = memo(() => {
  const [vitals, setVitals] = useAddonState(`${ADDON_ID}`, []);
  const [clsVital, setCLSVital] = useAddonState(`${ADDON_ID}/cls`, {});
  const [fidVital, setFIDVital] = useAddonState(`${ADDON_ID}/fid`, {});
  const [lcpVital, setLCPVital] = useAddonState(`${ADDON_ID}/lcp`, {});

  const emit = useChannel({
    [EVENTS.RESULT]: (vital) => {
      if (vital.name == "CLS") {
        setCLSVital(vital);
      }
      if (vital.name == "FID") {
        setFIDVital(vital);
      }
      if (vital.name == "LCP") {
        setLCPVital(vital);
      }
    },
  });

  React.useEffect(() => {
    setVitals([clsVital, fidVital, lcpVital]);
  }, [clsVital, fidVital, lcpVital]);

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
      {vitals &&
        vitals.map((vital, index) => {
          return (
            vital &&
            vital.value && (
              <Badge status={getBadgeStatus(vital)}>
                {vital.name}: {getNormalizedValue(vital.value)}{" "}
              </Badge>
            )
          );
        })}
    </>
  );
});
