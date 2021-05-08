import React from "react";
import Part from "./Part";

// Content component contain the bundling of course parts (Part component)
const Content = ({ course }) => {
  const courseParts = course.parts.map(
    part => <Part key={part.id} exerciseTitle={part.name} exerciseCount={part.exercises} />
  )

  let totalExercises = 0
  course.parts.forEach(part => totalExercises += part.exercises)

  // TODO count total exercises with .reduce()

  return (
    <div>
      {courseParts}
      <p>Total of {totalExercises} exercises</p>
    </div>
  )
};

export default Content;