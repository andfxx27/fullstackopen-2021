import React from "react";
import Courses from "./components/Courses";

const App = () => {
  // All data still resides in App component, and passed down to each child component via props
  const courses = [
    {
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
    }, 
    {
      id: 2,
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <Courses courses={courses} />
  );
};

export default App;