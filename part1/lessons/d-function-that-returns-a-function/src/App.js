import React, { useState } from "react";

import "./App.css";

const Button = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

const Display = (props) => {
  return <p>Hello world! Current value is {props.value}.</p>;
};

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (value) => {
    setValue(value);
  };

  return (
    <div>
      <Display value={value} />
      <Button onClick={() => setToValue(1000)} text="Set to 1000." />
      <Button onClick={() => setToValue(0)} text="Set to 0." />
      <Button onClick={() => setToValue(value + 1)} text="Increment by 1." />
    </div>
  );
};

export default App;
