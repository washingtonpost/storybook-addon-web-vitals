import { setTimeout } from "globalthis/implementation";
import React, { useEffect, useState } from "react";

const TestAd = () => (
  <div
    style={{
      background: "red",
      width: 400,
      height: 200,
    }}
  ></div>
);

export const Advertisement = () => {
  const [hasAdPlaced, placeAd] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      placeAd(true);
    }, 4000);
  }, []);

  return (
    <>
      {hasAdPlaced && <TestAd />}
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora commodi
        facilis architecto libero beatae iusto obcaecati, unde explicabo quae
        nesciunt optio asperiores fuga non ullam ipsam veritatis deleniti
        similique debitis?
      </div>
    </>
  );
};
