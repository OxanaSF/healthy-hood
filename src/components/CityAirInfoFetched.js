import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



const CityAirInfoFetched = (props) => {


  const [cityWeatherInfo, setCityWeatherInfo] = useState([]);
  let params = useParams();

  const getCityWeatherInfo = (cityName) => {
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: `http://localhost:8000/search`,
      params: {
        q: cityName,
      },
     
    };
    axios
      .request(options)
      .then((response) => {
        setCityWeatherInfo(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    console.log(params.name);
    getCityWeatherInfo(params.name);
  }, [params.name]);

  return (
    <CityAirInfoFetchedStyled>
      <h3>{params.name} air info</h3>

  
      

    </CityAirInfoFetchedStyled>
  );
};

const CityAirInfoFetchedStyled = styled.div`
  margin: 10rem auto;
  border: 1px solid black;
  padding: 5rem;
  width: 40%;
  text-align: center;
`;

export default CityAirInfoFetched;
