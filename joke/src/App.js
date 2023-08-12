import React, { useState, useEffect } from "react";
import "./App.css";
const Jokes = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.setup + " " + data.punchline);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="title">Random Jokes Generator</h1>
        <p className="jokes"> {joke} </p>
        <button className="btn" onClick={() => window.location.reload()}>
          New Joke
        </button>
      </div>
    </>
  );
};

export default Jokes;
