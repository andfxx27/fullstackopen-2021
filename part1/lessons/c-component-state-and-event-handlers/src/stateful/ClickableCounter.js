import React, { useState } from "react";

import "../styles.css";

const ClickableCounter = () => {
  const [counter, setCounter] = useState(0);

  // Using event handler to call the state-modifying function
  const incrementCount = () => {
    setCounter(counter + 1);
  };

  const resetCount = () => {
    setCounter(0);
  };

  return (
    <div className="clickable-counter margin-bt-md">
      <h2>Clickable counter</h2>
      <p>Current count is {counter}.</p>

      <button className="btn" onClick={incrementCount}>
        Count
      </button>
      <button className="btn" onClick={resetCount}>
        Reset
      </button>
    </div>
  );
};

export default ClickableCounter;
