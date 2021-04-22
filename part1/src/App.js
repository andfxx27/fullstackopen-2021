import React from 'react'

// Component can be used inside another component
// props are passed by using JSX attribute (similar to HTML attribute)
const Greeting = (props) => {
  return (
    <div>
      <p>Greetings {props.name}! You are {props.age} years old, and Welcome to this react app.</p>
    </div>
  )
}

// Component must contain one root element (usually a div)
const Footer = () => {
  return (
    <div>
      <p>This is a footer</p>
    </div>
  )
}

// Return JSX.Element
const App = () => {
  console.log('Hello from App component')

  const now = new Date()
  const a = 5
  const b = 7

  // The JSX part will be compiled into JavaScript by Babel
  // JSX can be wrapped with empty element (fragment) to avoid "extra" div element in DOM
  // Extra explanation.
  // <div id="root">
  //    <div> -> this can be avoided using fragment
  //        <Greeting /> ...
  //    </div>
  // </div>
  return (
    <>
      <Greeting name="Felix" age={now.getFullYear() - 2000} />
      <Greeting name="KennyS" age={25} />
      <hr />
      <p>Hello World, it is {now.toString()}</p>
      <p>{a} + {b} is equal {a + b}</p>
      <Footer />
    </>
  )
}

export default App;
