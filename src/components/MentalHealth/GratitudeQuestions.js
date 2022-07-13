import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { ClockLoader } from 'react-spinners';

const GratitudeQuestions = () => {
  const [gratitudeQuestion, setGratitudeQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState('#fca0b9');

  // useCallback(() => {
  //   getGratitudeQuestion();
  // }, [gratitudeQuestion]);

  const getGratitudeQuestion = () => {
    setLoading(true);
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'http://localhost:8000/question',
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setGratitudeQuestion(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // getGratitudeQuestion();

  //   console.log('gratitudeQuestion:', gratitudeQuestion);

  return (
    <ButtonStyled>
      <h2>Generate Gratitude Question of a day.</h2>

      <button onClick={getGratitudeQuestion}>Get Question</button>

      {loading ? (
        <ClockLoaderStyled>
          <ClockLoader
            color={color}
            loading={loading}
            size={140}
            display="flex"
            justifyContent="center"
            backgroundColor="white"
          />
        </ClockLoaderStyled>
      ) : (
        <div className="gratitude-question">{gratitudeQuestion}</div>
      )}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  border: 10px solid rgb(254, 233, 218);
  border-radius: 3rem;
  padding: 1rem;

  h2 {
    color: #fca0b9;
    font-size: 1.7rem;
    font-weight: 600;
    text-align: center;
  }

  button {
    width: 15rem;
    height: 5rem;
    background-color: #fee3ea;
    border: 2px solid #fca0b9;
    border-radius: 2rem;
    cursor: pointer;
    color: #fe78ab;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .gratitude-question {
    font-size: 1.7rem;
    text-align: center;
    font-weight: 700;
    color: #3e4981;
  }

  @media only screen and (max-width: 700px) {
    h2 {
      font-size: 1.2rem;
    }

    button {
      width: 9rem;
      height: 5rem;
      border-radius: 1rem;
      border: none;
      font-weight: 600;

    }

    .gratitude-question {
      font-size: 1.2rem;
    }
  }
`;

const ClockLoaderStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export default GratitudeQuestions;
