import React from "react";

import "../App.css";

const Form = (props) => {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <div className="form-input-container">
          <input
            className="form-input-content"
            id="name"
            onChange={props.nameOnChangeHandler}
            value={props.name}
            placeholder="Name"
          />
          <input
            className="form-input-content"
            id="phone"
            onChange={props.phoneOnChangeHandler}
            value={props.phone}
            placeholder="Phone"
          />
          <button className="form-input-content" type="submit">
            Submit
          </button>
        </div>
      </form>
      <hr />
    </>
  );
};

export default Form;
