import React, { useState } from 'react'
import './App.css';

// Component responsible for displaying the counter
// The counter state will be passed down via props from parent (App) component
const Display = ({ counter }) => {
  return (
    <p>Current counter is: {counter}</p>
  )
}

// Component responsible for handling click event
const Button = ({ handleClick, btnText }) => {
  return (
    <button onClick={handleClick}>
      {btnText}
    </button>
  )
}

const App = () => {
  // useState returns 2 value:
  // counter: simple number state
  // setCounter: function to update counter state
  // and it also sets the initial state, in this case counter: 0
  // state variables are preserved by react even when the function exits
  // The state is shared between the parent and child component
  // THE ONLY WAY to reset state variable is by using the state modifying function (setCounter in this case)
  const [ counter, setCounter ] = useState(0)

  // Define all event handlers here
  // Event handler is basically a function
  const increaseCounterByOne = () => setCounter(counter + 1)
  const resetCounter = () => setCounter(0)
  const decreaseCounterByOne = () => setCounter(counter - 1)

  console.log(`rendering ... ${counter}`)

  return (
    <div className="App">
      <Display counter={counter} />
      <Button 
        handleClick={increaseCounterByOne} 
        btnText={'Increment'} 
      />
      <Button 
        handleClick={resetCounter} 
        btnText={'Reset'} 
      />
      <Button 
        handleClick={decreaseCounterByOne} 
        btnText={'Decrement'} 
      />
    </div>
  )
}

export default App;