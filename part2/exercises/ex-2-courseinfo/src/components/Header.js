import React from "react";

// Empty tag is fragment to avoid "extra" div-element
const Header = (props) => {
  return (
    <h2>
      {props.course.name}
    </h2>
  );
};

export default Header;