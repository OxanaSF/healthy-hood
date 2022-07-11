import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const MentalHealthArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState('#fca0b9');

  useCallback(() => {
    getMentalHealthArticle();
  }, []);

  const getMentalHealthArticle = () => {
    setLoading(true);
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'http://localhost:8000/news',
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setArticles(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <ArticlesStyled>
      MentalHealthArticles
      <button onClick={getMentalHealthArticle}>Click</button>
      {articles.map((item) => (
        <div key={item.title + item.url}>
          <div>{item.title}</div>
          <div>{item.url}</div>
          <div>{item.source}</div>
        </div>
      ))}
    </ArticlesStyled>
  );
};

const ArticlesStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  border: 10px solid rgb(254, 233, 218);
  border-radius: 3rem;

  padding: 10rem 2rem;
  width: 100%;
  height: 45rem;
  overflow: auto;
  text-align: justify;
`;

export default MentalHealthArticles;
