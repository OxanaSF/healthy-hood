import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router";
import AnimatedPage from "../../animations/AnimatedPageTransition";
import { data } from "./data";

const FitnessSearchBar = (props) => {
  const [input, setInput] = useState(false);
  const navigate = useNavigate();
  const [bodypart, setBodypart] = useState("");
  const [option, setOption] = useState({});
  const [exercise, setExercise] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(input);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(true);
    setOption(data[e.target.value]);
    console.log(option);
    setBodypart(option.bodyPart);
    setExercise(option.gifUrl);
  };

  return (
    <>
      <AnimatedPage>
        <select onChange={handleChange}>
          {data.map((option, index) => {
            return (
              <option key={index} value={index} placeholder="--Select--">
                {option.name.toUpperCase()}
              </option>
            );
          })}
        </select>
      </AnimatedPage>
      {!input ? null : (
        <>
          <div>{bodypart}</div>
          <img className="exercises" alt="exercise" src={exercise}></img>
        </>
      )}
    </>
  );
};

const SelectSection = styled.section``;

export default FitnessSearchBar;
