import React from "react";

// Props is a way to pass data between component
const Hello = (props) => {
  return (
    <div>
      <p>Hello world! {props.greetings}</p>
    </div>
  );
};

const Footer = (props) => {
  return (
    // Using fragments to wrap jsx (act as root element)
    <>
      <p>Copykanan 2021 - {props.authorName}.</p>
    </>
  );
};

const App = () => {
  console.log("Hello from App component.");

  let authorName = "Felix Andersen";
  let authorAge = new Date().getFullYear() - 2000;

  return (
    <div>
      <Hello greetings="Good day, innit?" />
      <p>
        My name is {authorName} and I'm {authorAge} years old.
      </p>
      <Footer authorName={authorName} />
    </div>
  );
};

export default App;
