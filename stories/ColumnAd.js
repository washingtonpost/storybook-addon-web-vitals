import React, { useEffect, useState } from "react";

const TestAd = () => (
  <div
    id="test-ad"
    style={{
      background: "red",
      width: 400,
      height: 200,
      flex: 1,
    }}
  ></div>
);

export const ColumnAd = () => {
  const [hasAdPlaced, placeAd] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      placeAd(true);
    }, 2000);
  }, []);

  return (
    <section style={{ display: "flex" }}>
      <div id="content1" style={{ flex: 1 }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          commodi facilis architecto libero beatae iusto obcaecati, unde
          explicabo quae nesciunt optio asperiores fuga non ullam ipsam
          veritatis deleniti similique debitis?
        </p>
      </div>
      <div id="content2" style={{ flex: 1 }}>
        {hasAdPlaced && <TestAd />}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          commodi facilis architecto libero beatae iusto obcaecati, unde
          explicabo quae nesciunt optio asperiores fuga non ullam ipsam
          veritatis deleniti similique debitis?
        </p>
      </div>
      <div id="content3" style={{ flex: 1 }}>
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
