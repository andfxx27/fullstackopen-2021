import React from "react";
import Course from "./Course";

const Courses = ({ courses }) => {
  const courseElements = courses.map(
    course => <Course key={course.id} course={course} />
  )

  return (
    <div>
      <h1>Web Development Curriculum</h1>
      {courseElements}
    </div>    
  )
}

export default Courses;