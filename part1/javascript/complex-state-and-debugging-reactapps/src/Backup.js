// File to store backup component
import React, { useState } from 'react'
import './App.css';

// Example apps part 1 - START
const ClickHistory = ({ allClicks }) => {
  // Conditional rendering
  if (allClicks.length === 0) {
    return (
      <div>
        <p>How to use the application:</p>
        <ul>
          <li>Press left button to increase the left counter.</li>
          <li>Press right button to increase the right counter.</li>
          <li>Press reset button to reset both counter.</li>
        </ul>
      </div>
    )
  }

  // Only render the click history if allClicks length is greater than 0
  return (
    <div>
      <p>Button click history: {allClicks.join('-')}</p>
    </div>
  )
}
  
const Button = ({ handleClick, btnText }) => {
  return (
    <button className="btn" onClick={handleClick}>
      {btnText}
    </button>
  )
}
  
// Root component
const App = () => {
  // State can be of more complex type, such as object...
  const [ clicks, setClicks ] = useState({
    left: 0,
    right: 0
  })
  // ...or even array
  // allClicks contain an array of letter consisting of 'L' or 'R' depending on the clicked button
  const [ allClicks, setAllClicks ] = useState([])

  // ... is a spread operator
  // it creates object copy of the argument (in this case clicks object)
  // additionally supplied property will update/ added to the original object
  const handleLeftClick = () => {
    // use .concat to avoid mutating the original state directly
    // .concat add the argument to the end of original array and return the new array
    setAllClicks(allClicks.concat('L'))
    setClicks({...clicks, left: clicks.left + 1})
  }  
  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'))
    setClicks({...clicks, right: clicks.right + 1})
  }
  const handleResetClick = () => {
    setAllClicks([])
    setClicks({left: 0, right: 0})
  }

  return (
    <div className="container">
      <span className="click-count">
        {clicks.left}
      </span>
      <Button handleClick={handleLeftClick} btnText="Left" />
      <Button handleClick={handleResetClick} btnText="Reset" />
      <Button handleClick={handleRightClick} btnText="Right" />
      <span className="click-count">
        {clicks.right}
      </span>
      <ClickHistory allClicks={allClicks} />
    </div>
  )
}
// Example apps part 1 - END