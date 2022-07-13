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
          .
          <FormStyled onSubmit={onSubmitHandler}>
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                value={input}
              />
            </div>
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
      font-size: 2.4rem;
      text-align: center;
      color: #243966;
      font-weight: 500;
    }

    .aqi-descriprion {
      width: 50%;
      margin: auto;
      color: #243966;
      font-weight: 500;
      text-align: center;
      margin-bottom: 3rem;
    }

    @media only screen and (max-width: 1300px) {
      .aqi-descriprion {
        width: 90%;
      }
    }
  }

  @media only screen and (max-width: 700px) {
    .container {
      h3 {
        font-size: 1.7rem;
        margin: 2rem;
        color: #8c777c;
      }

      .aqi-descriprion {
        width: 90%;
        font-size: 1rem;
        margin-bottom: 0;
        color: #8c777c;
      }
    }
  }

  @media only screen and (max-width: 280px) {
    .container {
      h3 {
        font-size: 1.7rem;
        margin: 2rem;
        color: #8c777c;
      }

      .aqi-descriprion {
        width: 90%;
        font-size: 1rem;
        margin-bottom: 0;
        color: #8c777c;
      }
    }
  }
`;

const FormStyled = styled.form`
  display: flex;
  justify-content: center;

  .search-box {
    position: relative;
  }

  .search-icon {
    position: absolute;
    top: 1.2rem;
    left: 2rem;
    font-size: 2rem;
    color: lightblue;
  }

  input {
    border: 5px solid lightblue;
    padding: 1rem 3rem;
    margin-bottom: 3rem;
    border-radius: 1rem;
    outline: none;
    font-size: 1rem;
    width: 40rem;

    text-align: center;
    color: #999999;
    font-weight: 600;
    letter-spacing: 1px;
  }

  @media only screen and (max-width: 1300px) {
    /* transform: translateY(0%); */
    h3 {
      font-size: 2rem;
      width: 100%;
      text-align: left;
    }

    input {
      width: 80%;
    }
  }

  @media only screen and (max-width: 700px) {
    input {
      width: 100%;
      margin: auto;
    }
  }

  @media only screen and (max-width: 280px) {
    input {
      width: 100%;
      margin: auto;
    }
  }
`;

export default CityAirSearchBar;
