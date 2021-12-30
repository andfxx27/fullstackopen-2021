import React from "react";

import "./styles.css";

const Counter = (props) => {
  const { counter } = props;
  return (
    <div className="counter">
      <p>{counter}</p>
    </div>
  );
};

export default Counter;
