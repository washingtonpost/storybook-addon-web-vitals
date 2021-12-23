import React, { useState, useEffect } from "react";
/**
 * Create a new Input react component that will render a value in an input html element on a delay
 */
export const Input = (props) => {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setTimeout(() => {
      setValue(props.value);
    }, props.delay);
  }, [props.value]);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
