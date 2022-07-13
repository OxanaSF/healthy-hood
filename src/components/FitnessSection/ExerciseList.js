import React from "react";

import Exercises from "./Exercises";

const ExerciseList = (props) => {
  return (
    <div>
      <Exercises
        key={props.exercise.id}
        name={props.exercise.name}
        target={props.exercise.target}
        bodypart={props.exercise.bodypart}
        gifUrl={props.exercise.gifUrl}
      />
    </div>
  );
};

export default ExerciseList;
