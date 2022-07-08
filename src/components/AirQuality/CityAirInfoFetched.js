import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ClockLoader from 'react-spinners/ClockLoader';

const CityAirInfoFetched = (props) => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState('lightblue');
  const [aqiStyle, setAqiStyle] = useState('');

  const [cityWeatherInfo, setCityWeatherInfo] = useState([]);
  const [date, setDate] = useState('');
  const [aqius, setAqius] = useState(0);
  const [img, setImg] = useState('');

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
        // console.log('Cities: ', response.data);
        setCityWeatherInfo(response.data.data.cities[0]);
        setDate(
          response.data.data.cities[0].currentMeasurement.ts.slice(0, 10)
        );
        setAqius(response.data.data.cities[0].currentMeasurement.aqius);
        // setImg(response.data.data.news[0].contributors.picture);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    // console.log(params.name);
    getCityWeatherInfo(params.name);
  }, [params.name]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  console.log(aqius);

  return (
    <RequestDisplayStyled>
      <img src={`${process.env.PUBLIC_URL}/images/aqi_level.jpeg`} alt="" />
      {loading ? (
        <ClockLoaderStyled>
          <ClockLoader
            color={color}
            loading={loading}
            size={150}
            display="flex"
            justifyContent="center"
            backgroundColor="white"
          />
        </ClockLoaderStyled>
      ) : (
        <CityAirInfoFetchedStyled>
          <div className="display-details">
            <div>
              {cityWeatherInfo.city}, {cityWeatherInfo.country}
            </div>
            <div>{date}</div>
            <div
              style={
                Number(aqius) <= 50
                  ? {
                      background: '#acd060',
                      borderRadius: '0.5rem',
                      width: '10rem',
                      textAlign: 'center',
                      color: 'white',
                    }
                  : Number(aqius) <= 100
                  ? {
                      background: '#f5d55f',
                      borderRadius: '0.5rem',
                      width: '10rem',
                      textAlign: 'center',
                      color: 'white',
                    }
                  : Number(aqius) <= 150
                  ? {
                      background: '#fd9a50',
                      borderRadius: '0.5rem',
                      width: '10rem',
                      textAlign: 'center',
                      color: 'white',
                    }
                  : Number(aqius) <= 200
                  ? {
                      background: '#f56866',
                      borderRadius: '0.5rem',
                      width: '10rem',
                      textAlign: 'center',
                      color: 'white',
                    }
                  : Number(aqius) <= 300
                  ? {
                      background: '#a47dbb',
                      borderRadius: '0.5rem',
                      width: '10rem',
                      textAlign: 'center',
                      color: 'white',
                    }
                  : {
                      background: '#a07785',
                      borderRadius: '0.5rem',
                      width: '10rem',
                      textAlign: 'center',
                      color: 'white',
                    }
              }
            >
              AQI: {aqius}
            </div>{' '}
          </div>
        </CityAirInfoFetchedStyled>
      )}
    </RequestDisplayStyled>
  );
};

const RequestDisplayStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2rem 10rem;

  img {
    width: 100%;
    border-radius: 3rem;
    border: 10px solid lightblue;
    padding: 3rem;
  }

  img:hover {
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }
`;

const CityAirInfoFetchedStyled = styled.div`
  font-size: 1.8rem;

  display: flex;
  justify-content: center;

  .display-details {
    font-size: 1.8rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const ClockLoaderStyled = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
`;

export default CityAirInfoFetched;