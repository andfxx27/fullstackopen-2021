import React from "react";

import Counter from "./Counter";
import StatefulAutoCounter from "./stateful/AutoCounter";
import StatefulClickableCounter from "./stateful/ClickableCounter";

const Hello = (props) => {
  // Destructuring object
  // Suppose props is an object, like:
  // { name: 'Felix', age: 25 }
  // Newly created variable name will be 'Felix' and age will be 25
  const { name, age } = props;

  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old.
      </p>
      <p>So you were probably born in {bornYear()}.</p>
    </div>
  );
};

const App = () => {
  const name = "Felix";
  const age = 21;
  let counter = 0;

  return (
    <div>
      <h1>Greetings</h1>

      <StatefulAutoCounter />
      <StatefulClickableCounter />
    </div>
  );
};

export default App;
