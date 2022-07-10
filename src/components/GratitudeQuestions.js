import { useEffect, useState } from 'react';
import styled from 'styled-components';

const GratitudeQuestions = () => {
  const [gratitudeQuestion, setGratitudeQuestion] = useState('');

  useEffect(() => {
    getGratitudeQuestion();
  }, []);

  const getGratitudeQuestion = () => {
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'http://localhost:8000/question',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'gratitude-questions.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setGratitudeQuestion(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  //   console.log('gratitudeQuestion:', gratitudeQuestion);

  return (
    <ButtonStyled>
      <h2>Generate Gratitude Question of a day.</h2>

      <button onClick={getGratitudeQuestion}>Get Question</button>

      <div className="gratitude-question">{gratitudeQuestion}</div>
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
`;

export default GratitudeQuestions;
