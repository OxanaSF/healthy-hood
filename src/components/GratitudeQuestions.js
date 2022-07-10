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
        console.log(response.data.question)
        setGratitudeQuestion(response['data']['question'])
      })
      .catch(function (error) {
        console.error(error);
      });
  };



//   console.log('gratitudeQuestion:', gratitudeQuestion);

  return (
    <ButtonStyled>
      <h1>Generate Gratitude Question of a day.</h1>

      <button onClick={getGratitudeQuestion}></button>

      <div>{gratitudeQuestion}</div>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  button {
    width: 15rem;
    height: 7rem;
    background-color: lightblue;
    border: none;
    border-radius: 3rem;
    cursor: pointer;
  }
`;

export default GratitudeQuestions;
