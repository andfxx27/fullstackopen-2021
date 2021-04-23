import React from "react";

// Empty tag is fragment to avoid "extra" div-element
const Header = (props) => {
  return (
    <h1>
      {props.course}
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
      <Part exerciseTitle={props.part1} exerciseCount={props.exercise1} />
      <Part exerciseTitle={props.part2} exerciseCount={props.exercise2} />
      <Part exerciseTitle={props.part3} exerciseCount={props.exercise3} />
    </div>
  )
};

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.part1ExerciseCount + props.part2ExerciseCount + props.part3ExerciseCount}
    </p>
  );
};

const App = () => {
  // All data still resides in App component, and passed down to each child component via props
  const course = 'Half stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10;
  const part2 = 'Using props to pass data'
  const exercise2 = 7;
  const part3 = 'State of a component'
  const exercise3 = 14;

  return (
    <>
      <Header course={course} />
      <Content part1={part1} exercise1={exercise1} part2={part2} exercise2={exercise2} part3={part3} exercise3={exercise3} />
      <Total part1ExerciseCount={exercise1} part2ExerciseCount={exercise2} part3ExerciseCount={exercise3} />
    </>
  );
};

export default App;
