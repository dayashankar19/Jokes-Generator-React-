import React from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={props.callApi}>
        <h1>Generate Random Joke</h1>
      </button>
    </>
  );
};

export default Button;
