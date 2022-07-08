import styled from "styled-components";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router";
import AnimatedPage from "../../animations/AnimatedPageTransition";
import { data } from "./data";

const FitnessSearchBar = (props) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const [option, setOption] = useState({});
  console.log(option);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(input);
    setInput("");
  };

  const handleChange = (e) => {
    setOption(data[+e.target.value]);
  };

  return (
    <AnimatedPage>
      <FormSectionStyled>
        <FormStyled onSubmit={onSubmitHandler}>
          <select onChange={handleChange}>
            {data.map((option, index) => (
              <option key={index} value={index} active="true">
                {option.name}
              </option>
            ))}
          </select>
        </FormStyled>

        <Outlet />
      </FormSectionStyled>
    </AnimatedPage>
  );
};

const FormSectionStyled = styled.section`
  h3 {
    font-size: 4rem;
    text-align: center;
  }
  .container {
  }
  input type="bodypart" {
  }
`;

const FormStyled = styled.form`
  padding-top: 2rem;
  display: flex;
  justify-content: center;

  position: relative;

  .search-icon {
    position: absolute;
    top: 3rem;
    left: 35rem;
    font-size: 2rem;
    color: lightblue;
    margin-right: 2rem;
    font-weight: 100;
  }

  h3 {
    text-align: center;
    padding-bottom: 3rem;
    font-size: 2.2rem;
    width: 75%;
    margin: auto;
    height: 2rem;
    margin-bottom: 1rem;
    background-color: rgba(255, 255, 255, 0.8);
  }

  input {
    border: 5px solid lightblue;
    padding: 1rem 3rem;
    margin-bottom: 3rem;
    border-radius: 1rem;
    outline: none;
    font-size: 1rem;
    width: 40%;

    text-align: center;
    color: #999999;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;

export default FitnessSearchBar;
