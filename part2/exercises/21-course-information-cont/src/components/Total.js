import React from "react";

const Total = ({ parts }) => {
  // Explanation
  // Supply initial value of 0
  // For each iteration, prev will be the value returned from previous callback function, or initial value
  // curr will be the first array element if an initial value is supplied
  // If no initial value is supplied, for first iteration, prev and curr will be first and second element respectively
  const totalExercises = parts.reduce((prev, curr) => {
    return prev + curr.exercises;
  }, 0);

  return (
    <p>
      <strong>Total of {totalExercises} exercises.</strong>{" "}
    </p>
  );
};

export default Total;
