import React from "react";

// Empty tag is fragment to avoid "extra" div-element
const Header = (props) => {
  return (
    <h1>
      {props.course.name}
    </h1>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.exerciseTitle} {props.exerciseCount}
    </p>
  )
}

// Content component contain three Part component
const Content = (props) => {
  return (
    <div>
      <Part exerciseTitle={props.course.parts[0].name} exerciseCount={props.course.parts[0].exercises} />
      <Part exerciseTitle={props.course.parts[1].name} exerciseCount={props.course.parts[1].exercises} />
      <Part exerciseTitle={props.course.parts[2].name} exerciseCount={props.course.parts[2].exercises} />
    </div>
  )
};

const Total = (props) => {
  let numberOfExercises = 0
  props.course.parts.forEach(part => {
    numberOfExercises += part.exercises
  });

  return (
    <p>
      Number of exercises {numberOfExercises}
    </p>
  );
};

const App = () => {
  // All data still resides in App component, and passed down to each child component via props
  const course = {
    name: 'Half stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 15,
      },     
    ]
  }

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

export default App;
