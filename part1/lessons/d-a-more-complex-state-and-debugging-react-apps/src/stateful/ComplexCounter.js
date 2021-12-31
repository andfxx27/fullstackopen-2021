import React, { useState } from "react";

import "../App.css";

const Button = (props) => {
  return (
    <div>
      <button className="btn" onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
};

const Counter = (props) => {
  return (
    <div>
      <p>
        {props.text} count is {props.counter}.
      </p>
    </div>
  );
};

const ComplexCounter = () => {
  const [counter, setCounter] = useState({ leftCounter: 0, rightCounter: 0 });

  const leftCounterText = "Left";
  const rightCounterText = "Right";

  const leftCounterClickHandler = () => {
    const newCounterState = {
      ...counter, // spread syntax
      leftCounter: counter.leftCounter + 1,
    };

    setCounter(newCounterState);
  };

  const rightCounterClickHandler = () => {
    const newCounterState = {
      ...counter,
      rightCounter: counter.rightCounter + 1,
    };

    setCounter(newCounterState);
  };

  return (
    <div className="container">
      <h2>Complex counter</h2>
      <div className="inner-container">
        <div className="left-counter-container">
          <Counter text={leftCounterText} counter={counter.leftCounter} />
          <Button text={leftCounterText} onClick={leftCounterClickHandler} />
        </div>
        <div className="right-counter-container">
          <Counter text={rightCounterText} counter={counter.rightCounter} />
          <Button text={rightCounterText} onClick={rightCounterClickHandler} />
        </div>
      </div>
    </div>
  );
};

export default ComplexCounter;
