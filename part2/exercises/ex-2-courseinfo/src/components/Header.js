import React from "react";

// Empty tag is fragment to avoid "extra" div-element
const Header = (props) => {
  return (
    <h1>
      {props.course.name}
    </h1>
  );
};

export default Header;