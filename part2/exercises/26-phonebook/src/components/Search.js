import React from "react";

import "../App.css";

const Search = (props) => {
  return (
    <div className="search-input-container">
      <input
        className="search-input"
        id="search"
        onChange={props.onChange}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
