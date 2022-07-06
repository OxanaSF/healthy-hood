import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CityAirInfoFetched = (props) => {
  const [cityWeatherInfo, setCityWeatherInfo] = useState([]);
  const [date, setDate] = useState('');
  const [aqius, setAqius] = useState(0);
  const [img, setImg] = useState('')

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
        // console.log('Cities: ', response.data)
        setCityWeatherInfo(response.data.data.cities[0]);
        setDate(
          response.data.data.cities[0].currentMeasurement.ts.slice(0, 10)
        );
        setAqius(response.data.data.cities[0].currentMeasurement.aqius);
        setImg(response.data.data.news[0].contributors.picture)
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
      {/* <h3>{params.name} air info</h3> */}

      <div>
        {cityWeatherInfo.city}, {cityWeatherInfo.country},{' '}
      </div>
      <div>{date}</div>
      <div>{aqius}</div>
      <img src={img} alt="" />
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
