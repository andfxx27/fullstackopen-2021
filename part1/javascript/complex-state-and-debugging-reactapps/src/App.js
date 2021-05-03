import React, { useState } from 'react'
import './App.css';

const App = () => {
  const [value, setValue] = useState(10)

  // hello is a function with 1 parameter which returns...
  //...function that call "console.log(...)"
  const hello = (who) => () => {
    console.log('Hello World!', who)
  } 

  const setToValue = (value) => {
    setValue(value)
  }

  return (
    <div>
      <p>{value}</p>
      {/** 
       * onClick attribute below gets function reference returned by setToValue() function call
       */}
      <button onClick={() => setToValue(0)} className="btn">Reset</button>
      <button onClick={() => setToValue(value + 1)} className="btn">Increment</button>
    </div>
  )
}

export default App;