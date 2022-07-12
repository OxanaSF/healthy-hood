import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";
import AnimatedPage from "../../animations/AnimatedPageTransition";
import ExerciseList from "./ExerciseList";

const FitnessSelect = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setitems] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [error, setError] = useState(null);

  const fetchExercises = useCallback(async () => {
    setError(null);

    try {
      const response = await fetch(
        "https://fitness-ef629-default-rtdb.firebaseio.com/exercises.json"
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
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchExercises();
  }, [fetchExercises]);

  let content = <p>You have not selected and exercise.</p>;

  const handleChange = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setExercise(items[e.target.value]);
  };

  if (isLoading) {
    content = <ExerciseList exercise={exercise} />;
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

  img {
    border: 10px solid rgb(254, 233, 218);
    border-radius: 3rem;
    margin: 2rem auto;
  }
`;

export default FitnessSelect;
