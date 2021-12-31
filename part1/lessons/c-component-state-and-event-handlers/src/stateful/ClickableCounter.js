import React, { useState } from "react";

import "../styles.css";

// Immediately destructure props.counter on the function parameter
const Button = ({ onClick, text }) => (
  <button className="btn" onClick={onClick}>
    {text}
  </button>
);

const DisplayCounter = ({ counter }) => (
  <>
    <h2>Clickable counter</h2>
    <p>Current count is {counter}.</p>
  </>
);

const ClickableCounter = () => {
  const [counter, setCounter] = useState(0);

  // Using event handler to call the state-modifying function
  const incrementCount = () => {
    setCounter(counter + 1);
  };

  const resetCount = () => {
    setCounter(0);
  };

  const decrementCount = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="clickable-counter margin-bt-md">
      <DisplayCounter counter={counter} />

      <Button onClick={incrementCount} text="Increment" />
      <Button onClick={resetCount} text="Reset" />
      <Button onClick={decrementCount} text="Decrement" />
    </div>
  );
};

export default ClickableCounter;
