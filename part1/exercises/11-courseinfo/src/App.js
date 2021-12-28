import React from "react";

// Render course title
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

// Render single course information (title & exercise count)
const ContentPart = (props) => {
  return (
    <p>
      {props.title} {props.exerciseCount}
    </p>
  );
};

// Render all course information
const Content = (props) => {
  return (
    <>
      {props.parts.map((part) => (
        <ContentPart
          key={part.title}
          title={part.title}
          exerciseCount={part.exerciseCount}
        />
      ))}
    </>
  );
};

// Render total number exercises
const Total = (props) => {
  let totalExercises = 0;
  props.parts.forEach((part) => {
    totalExercises += part.exerciseCount;
  });

  return (
    <>
      <p>Number of exercises {totalExercises}.</p>
    </>
  );
};

// Root component
const App = () => {
  const course = "Half stack application development";
  const parts = [
    { title: "Fundamentals of React", exerciseCount: 10 },
    { title: "Using props to pass data", exerciseCount: 7 },
    { title: "State of a component", exerciseCount: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
