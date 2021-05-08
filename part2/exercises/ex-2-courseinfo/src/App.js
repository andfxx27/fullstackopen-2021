import React from "react";
import Course from "./components/Course";

const App = () => {
  // All data still resides in App component, and passed down to each child component via props
  const course = {
    id: 1,
    name: 'Half stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 15,
        id: 3,
      },
      {
        name: 'Functional Programming',
        exercises: 9,
        id: 4,
      },
    ]
  }

  return (
    <Course course={course} />
  );
};

export default App;