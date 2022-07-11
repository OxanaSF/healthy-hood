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
        <div key={item.title + item.url} className='article'>
          <div className='title'>{item.title}</div>
          <p><a href={item.url} className='url'>Link to the article</a></p>
          <div className='source'>Source: {item.source}</div>
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


  .article {
    border-bottom: 3px solid rgb(254, 233, 218);;
   margin: 2rem;
   padding-bottom: 1.5rem;
   width: 80%;
  }

  .title {
    padding-bottom: 1rem;
    color: #243966;
    font-weight: 500;
    font-size: 1.7rem;
    font-family: 'Roboto', sans-serif;
    /* font-style: italic;
    text-decoration: underline; */
  }

  .url {
    color: lightblue;
    font-weight: 700;
    text-decoration: underline; 
  }

  .source {
    text-transform: capitalize;
    color: #4480cf;
    font-weight: 700;
    font-size: 1.5rem;
  }
`;

export default MentalHealthArticles;
