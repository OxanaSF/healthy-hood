import React from "react";

const Exercises = (props) => {
  console.log(props);

  return (
    <>
      <div>
        <h2>Target Muscle:</h2>
        <p>{props.target}</p>
        <h2>Bodypart:</h2>
        <p>{props.bodypart}</p>
      </div>
      <div>
        <img src={props.gifUrl} alt="exercise"></img>
      </div>
    </>
  );
};

export default Exercises;
