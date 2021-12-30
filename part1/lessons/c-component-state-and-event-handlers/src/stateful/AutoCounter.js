import React, { useState } from "react";

import "../styles.css";

const AutoCounter = () => {
  // useState returns a state value and a function to update that value
  // If a component re-renders, useState will return the latest value of the state
  const [counter, setCounter] = useState(0);

  // Update counter state after 1 second
  // component will re-renders everytime its state is modified
  // setTimeout(() => setCounter(counter + 1), 1000);
  setTimeout(() => {
    setCounter(counter + 1);
  }, 1000);

  return (
    <div className="counter margin-bt-md">
      <h2>Auto counter</h2>
      <p>Current value {counter}.</p>
    </div>
  );
};

export default AutoCounter;
