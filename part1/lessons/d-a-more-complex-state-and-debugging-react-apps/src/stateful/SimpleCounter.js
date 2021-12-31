// Notes. similar component to "ComplexCounter", but the state is not an object

import React, { useState } from "react";

import "../App.css";

// Notes. use debugger keyword to stop code execution for debugging purpose
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

const History = (props) => {
  let ui = ``;
  if (props.history.length === 0) {
    ui = (
      <div>
        <p>Start counting now by pressing the button below.</p>
      </div>
    );
  } else {
    ui = (
      <div>
        <p>Click history: {props.history.join(" ")}</p>
      </div>
    );
  }

  return ui;
};

const SimpleCounter = () => {
  const [leftCounter, setLeftCounter] = useState(0);
  const [rightCounter, setRightCounter] = useState(0);
  const [history, setHistory] = useState([]);

  const leftCounterText = "Left";
  const rightCounterText = "Right";
  const buttonText = "Count";

  const leftCounterClickHandler = () => {
    setHistory(history.concat("L"));
    setLeftCounter(leftCounter + 1);
  };

  const rightCounterClickHandler = () => {
    setHistory(history.concat("R"));
    setRightCounter(rightCounter + 1);
  };

  return (
    <div className="container">
      <h2>Simple counter</h2>
      <History history={history} />
      <div className="inner-container">
        <div className="left-counter-container">
          <Counter text={leftCounterText} counter={leftCounter} />
          <Button text={buttonText} onClick={leftCounterClickHandler} />
        </div>
        <div className="right-counter-container">
          <Counter text={rightCounterText} counter={rightCounter} />
          <Button text={buttonText} onClick={rightCounterClickHandler} />
        </div>
      </div>
    </div>
  );
};

export default SimpleCounter;
