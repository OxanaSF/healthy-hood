import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";
import AnimatedPage from "../../animations/AnimatedPageTransition";
import ExerciseList from "./ExerciseList";
import { useLocation } from "react-router-dom"
import { animateScroll as scroll } from "react-scroll";

const FitnessSelect = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setitems] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [error, setError] = useState(null);
  const [exerciseIndex, setExerciseIndex] = useState()

  let location = useLocation()    
  let state = null
  
  const fetchExercises = useCallback(async () => {
    setError(null);

    try {
      const response = await fetch(
        "https://fitness-ef629-default-rtdb.firebaseio.com/exercises.json",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      const transformData = data.map((option) => {
        return {
          bodypart: option.bodyPart,
          equipment: option.equipment,
          gifUrl: option.gifUrl,
          id: option.id,
          name: option.name,
          target: option.target,
        };
      });
      console.log(transformData);

      setitems(transformData);
      if(state !== null){
        console.log('in fetch, ',state)
        setExercise(transformData[state.id])
        setIsLoading(true)
        state = null
      }
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    if(items.length === 0){
      fetchExercises();
      state = location.state
      console.log('fetching: ', state)
    }
     if(items.length > 0 && state !== null){
      console.log('should be here')
      setExercise(items[state.id])
      setIsLoading(true)
      state = null
    }
  }, [fetchExercises,items]);

  let content = <p>You have not selected and exercise.</p>;
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  const handleChange = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setExercise(items[e.target.value]);
    setExerciseIndex(e.target.value)
    scrollToBottom();
  };



  if (isLoading) {
    content = <ExerciseList exercise={exercise} exerciseIndex={exerciseIndex} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <>
      <AnimatedPage>
        <SelectSection>
          <select
            className="dropdown"
            onChange={handleChange}
            defaultValue={"default"}
          >
            <option value="default" disabled>
              Select an Exercise
            </option>
            {items.map((item, i) => {
              return (
                <option key={item.id} value={i}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <section className="content">{content}</section>
        </SelectSection>
      </AnimatedPage>
    </>
  );
};

const SelectSection = styled.section`
  font-size: 1rem;
  font-weight: 600;
  color: #243966;
  margin: 2rem 0;
  text-align: center;
  select {
    text-align: center;
    border: 3px solid rgb(254, 233, 218);
    border-radius: 3rem;
    width: fit-content;
  }
`;

export default FitnessSelect;
