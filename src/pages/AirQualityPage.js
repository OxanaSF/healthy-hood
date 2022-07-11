import styled from 'styled-components';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

import {
  slidesFromLeftLeaveToLeft,
  slidesFromRightftLeaveToRight,
} from '../animations/animation';
import AnimatedPage from '../animations/AnimatedPageTransition';

const AirQualityPage = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        'https://eonet.gsfc.nasa.gov/api/v3/events/geojson',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('ORIGINAL DATA is: ', JSON.stringify(result, null, 10));

      props.setData(result['features']);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // console.log(props.data);

  return (
    <AnimatedPage>
      <AirQualityContainerStyled>
        <h1>Air Quality</h1>

        <div className="air-quality-page-intro">
          <p>
            Having clean air to breathe is necessary for good health. Poor air
            quality reduces quality of life. Some air pollutants are irritants.
            Some smell bad. Some air pollutants can cause respiratory disease or
            even cancer. Air quality is important both indoors and outdoors.
            Ground level ozone, particulate matter and allergens are common
            outdoor air pollutants. Secondhand smoke, mold and radon are common
            indoor air pollutants. Poor air quality may limit people’s ability
            or opportunity to be physically active. People with preexisting
            medical conditions such as asthma, emphysema or COPD are at greater
            risk from poor air quality. Good air quality is an important
            livability indicator for a healthy community.{' '}
          </p>
        </div>

        <main className="air-quality-page-main">
          <div className="top-main-section">
            <motion.img
              src={`${process.env.PUBLIC_URL}/images/family-outside-no-bg.jpeg`}
              alt="family-outside"
              variants={slidesFromLeftLeaveToLeft}
              initial="hidden"
              animate="show"
            />

            <motion.div
              className="list-clean-air-benefits"
              variants={slidesFromRightftLeaveToRight}
              initial="hidden"
              animate="show"
            >
              <h3>Breathing in clean air has many benefits, including:</h3>
              <ul>
                <li>Cleaner lungs</li>
                <li>Decreased asthma and allergies symptoms</li>
                <li>Improved skin appearance</li>
                <li>Helps digestion</li>
                <li>Psychological and emotional stabilizer</li>
                <li>Better mood and normalized sleep patterns</li>
                <li>Reduce chances of lung, heart, and arterial diseases</li>
              </ul>
            </motion.div>
          </div>

          <div className="air-quality-page-main">
            <nav className="air-quality-page-nav">
              <NavLink to="/clean-air/search" className="circle1">
                <p>Get AQI in your city</p>
              </NavLink>
              <NavLink
                to="/clean-air/wildfires"
                className="circle2"
                onClick={handleClick}
              >
                <p>Wildfire Tracker</p>
              </NavLink>
            </nav>

            <div>
              <Outlet />
            </div>
          </div>
        </main>
      </AirQualityContainerStyled>
    </AnimatedPage>
  );
};

const AirQualityContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  

  h1 {
    font-size: 4.5rem;
    font-weight: 600;
    color: #243966;
    margin: 4rem 0;
    text-align: center;
  }

  .air-quality-page-intro {
    margin: 0 10rem 1rem 10rem;
    color: #243966;
    font-size: 1.6rem;
    text-align: center;
  }

  .air-quality-page-main {
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    gap: 10rem;

    .top-main-section {
      margin: 5rem 10rem 0 10rem;
      display: grid;
      grid-template-columns: 1.2fr 1.6fr;
      gap: 5rem;

      .list-clean-air-benefits {
        border-radius: 3rem;
        color: #243966;
        border: 10px solid lightblue;
        width: 100%;
        height: 100%;
        font-size: 1.2rem;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 1.9;
        text-align: left;

        h3 {
          font-size: 1.6rem;
          font-weight: 500;
        }
      }

      img {
        background-color: lightblue;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 3rem;
      }
    }

    .air-quality-page-main {
      display: grid;
      grid-template-columns: 1fr;
    }

    nav {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5rem;
      font-size: 3rem;
      position: relative;
      transform: translateY(-6rem);

      a {
        color: #243966;
        background-color: lightblue;
        padding: 2.5rem;
        font-size: 1.2rem;
        border-radius: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      .circle1 {
        animation: circle1 3s;
        clip-path: circle(75%);
        height: 10rem;
        width: 20rem;
      }
      .circle2 {
        animation: circle2 4s;
        /* background: orange; */
        clip-path: circle(75%);
        height: 10rem;
        width: 20rem;
      }

      @keyframes circle1 {
        0% {
          clip-path: circle(75%);
        }
        50% {
          clip-path: circle(25%);
        }
        100% {
          clip-path: circle(75%);
        }
      }

      @keyframes circle2 {
        0% {
          clip-path: circle(75%);
        }
        50% {
          clip-path: circle(25%);
        }
        100% {
          clip-path: circle(75%);
        }
      }
    }
  }

  @media only screen and (max-width: 1300px) {
    h1 {
      font-size: 3.2rem;
    }

    .air-quality-page-intro {
    margin: 0 5rem 1rem 10rem;
    font-size: 1.2rem;
  }

  .air-quality-page-main {
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    gap: 10rem;

    nav {

      flex-direction: column;
    }

      .top-main-section {
      margin: 5rem 5rem 0 5rem;
      display: grid;
      grid-template-columns: 1fr;
      gap: 5rem;

    
    }
  }
}
`;

const AirQualityPageStyled = styled.section``;

export default AirQualityPage;
