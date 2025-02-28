import React, { useEffect, useState } from "react";

const TestAd = () => (
  <div
    id="test-ad"
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
    }, 2000);
  }, []);

  return (
    <section>
      <div id="content1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          commodi facilis architecto libero beatae iusto obcaecati, unde
          explicabo quae nesciunt optio asperiores fuga non ullam ipsam
          veritatis deleniti similique debitis?
        </p>
      </div>
      <div id="content2">
        {hasAdPlaced && <TestAd />}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          commodi facilis architecto libero beatae iusto obcaecati, unde
          explicabo quae nesciunt optio asperiores fuga non ullam ipsam
          veritatis deleniti similique debitis?
        </p>
      </div>
      <div id="content3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          commodi facilis architecto libero beatae iusto obcaecati, unde
          explicabo quae nesciunt optio asperiores fuga non ullam ipsam
          veritatis deleniti similique debitis?
        </p>
      </div>
    </section>
  );
};
