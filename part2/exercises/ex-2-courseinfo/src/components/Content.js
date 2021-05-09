import React from "react";
import Part from "./Part";

// Content component contain the bundling of course parts (Part component)
const Content = ({ course }) => {
  const courseParts = course.parts.map(
    part => <Part key={part.id} exerciseTitle={part.name} exerciseCount={part.exercises} />
  )

  const accumulatedParts = course.parts.reduce((accumulator, currentValue) => {
    const newPart = {...accumulator}
    newPart.exercises += currentValue.exercises
    return newPart
  })

  return (
    <div>
      {courseParts}
      <p>Total of {accumulatedParts.exercises} exercises</p>
    </div>
  )
};

export default Content;