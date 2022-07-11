import styled from "styled-components";
import { useState, useEffect } from "react";
import AnimatedPage from "../../animations/AnimatedPageTransition";
import { data } from "./data";

const FitnessSelect = (props) => {
  const [input, setInput] = useState(false);
  const [bodypart, setBodypart] = useState("");
  const [option, setOption] = useState("");
  const [exercise, setExercise] = useState("");

  const handleChange = (e) => {
    setInput(true);
    e.preventDefault();
    setOption(data[e.target.value]);
    console.log(option);
  };

  useEffect(() => {
    setBodypart(option.bodyPart);
    setExercise(option.gifUrl);
  }, [option]);

  return (
    <>
      <AnimatedPage>
        <SelectSection>
          <select onChange={handleChange}>
            <option disabled={true} selected>
              Select Exercise
            </option>
            {data.map((option, index) => {
              return (
                <option key={option.id} value={index} placeholder="Select">
                  {option.name.toUpperCase()}
                </option>
              );
            })}
          </select>
        </SelectSection>
      </AnimatedPage>
      {!input ? null : (
        <>
          <SelectSection>
            <h2>Targeted Muscle:</h2>
            <h3>{bodypart}</h3>
            <img className="exercises" alt="exercise" src={exercise}></img>
          </SelectSection>
        </>
      )}
    </>
  );
};

const SelectSection = styled.section`
  font-size: 1rem;
  font-weight: 600;
  color: #243966;
  margin: 2rem 0;
  select {
    text-align: center;
    border: 3px solid rgb(254, 233, 218);
    border-radius: 3rem;
    width: fit-content;
  }
  h3 {
    font-size: 2rem;
  }
  img {
    border: 10px solid rgb(254, 233, 218);
    border-radius: 3rem;
    margin: 2rem auto;
  }
`;

export default FitnessSelect;
