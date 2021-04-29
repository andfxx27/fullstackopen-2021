import React, { useState } from 'react'
import './App.css';

// Contains backup component
// React state hook with timer
const StateHookWithTimer = () => {
  // useState returns 2 value:
  // counter: simple number state
  // setCounter: function to update counter state
  // and it also sets the initial state, in this case counter: 0
  // state variables are preserved by react even when the function exits
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    // React re-renders the component when state modifying function is called
    () => setCounter(counter + 1), 
    1000
  )

  console.log(`rendering ... ${counter}`)

  return (
    <div className="App">
      <p>Current counter is: {counter}</p>
    </div>
  )
}