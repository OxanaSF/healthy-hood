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
      <button onClick={getMentalHealthArticle}>Click</button>
      {articles.map((item) => (
        <div key={item.title + item.url} className="article">
          <p>
            <a href={item.url} target="_blank" className="url">
              {item.title}
            </a>
          </p>
          <div className="source">Source: {item.source}</div>
        </div>
      ))}
    </ArticlesStyled>
  );
};

const ArticlesStyled = styled.div`
  height: 50rem;
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

  .article {
    border-bottom: 3px solid rgb(254, 233, 218);
    margin: 2rem;
    padding-bottom: 1.5rem;
    width: 80%;
  }

  .url {
    font-weight: 700;
    padding-bottom: 1rem;
    color: #243966;
    font-weight: 500;
    font-size: 1.7rem;
    font-family: 'Roboto', sans-serif;
  }

  .url:hover {
    text-decoration: underline;
    color: #4480cf;
    color: #6495ed;
  }

  .source {
    text-transform: capitalize;
    color: #9fcfd7;
    font-weight: 700;
    font-size: 1.5rem;
    padding-top: 2rem;
  }
`;

export default MentalHealthArticles;
