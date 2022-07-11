import styled from 'styled-components';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { FaSearch } from 'react-icons/fa';
import AnimatedPage from '../../animations/AnimatedPageTransition';

const CityAirSearchBar = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(input);
    setInput('');
  };

  return (
    <AnimatedPage>
      <FormSectionStyled>
        <div className="container">
          <h3>Get up-to-date AQI of your city</h3>
          <p className="aqi-descriprion">
            *Air Quality Index (AQI) & Health Millions of people live in areas
            where air pollution can cause serious health problems. Local air
            quality can affect our daily lives. Like the weather, it can change
            from day to day. EPA developed the Air Quality Index, or AQI, to
            make information available about the health effects of the five most
            common air pollutants, and how to avoid those effects.
          </p>

          <FormStyled onSubmit={onSubmitHandler}>
            <FaSearch className="search-icon" />
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              value={input}
            />
          </FormStyled>
        </div>

        <Outlet />
      </FormSectionStyled>
    </AnimatedPage>
  );
};

const FormSectionStyled = styled.section`
  .container {
    h3 {
      font-size: 3rem;
      text-align: center;
      color: #243966;
    }

    .aqi-descriprion {
      width: 50%;
      margin: auto;
      color: #243966;
      font-weight: 500;
      text-align: center;
    }

    @media only screen and (max-width: 1300px) {
      .aqi-descriprion {
        width: 90%;
      }
    }
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

  @media only screen and (max-width: 1300px) {
    transform: translateY(0%);
    h3 {
      font-size: 2rem;
      width: 100%;
      text-align: left;
    }

    input {
      width: 80%;
    }
  }
`;

export default CityAirSearchBar;
