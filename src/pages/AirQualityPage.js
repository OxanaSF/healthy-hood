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
        <div className="air-info-display">
          <div className="about-aqi">
            <p>
              Air Quality Index (AQI) & Health Millions of people live in areas
              where air pollution can cause serious health problems. Local air
              quality can affect our daily lives. Like the weather, it can
              change from day to day. EPA developed the Air Quality Index, or
              AQI, to make information available about the health effects of the
              five most common air pollutants, and how to avoid those effects.
            </p>
          </div>
          <div className="about-woldfires">
            The effects of smoke from wildfires can range from eye and
            respiratory tract irritation to more serious disorders, including
            reduced lung function, bronchitis, exacerbation of asthma and heart
            failure, and premature death. Children, pregnant women, and the
            elderly are especially vulnerable to smoke exposure. Emissions from
            wildfires are known to cause increased visits to hospitals and
            clinics by those exposed to smoke. It is important to more fully
            understand the human health effects associated with short- and
            long-term exposures to smoke from wildfires as well as prescribed
            fires, referred together as wildland fires. Research is being
            conducted to advance understanding of the health effects from
            different types of fires as well as combustion phases.
          </div>
        </div>

        <NavLink to="/" className="contact-us">
          <button><h2>CONTACT US</h2></button>
        </NavLink>
      </AirQualityContainerStyled>
    </AnimatedPage>
  );
};

const AirQualityContainerStyled = styled.section`
  display: flex;
  flex-direction: column;

  .contact-us {
    padding: 3rem;
    background-color: rgb(254, 233, 218);
    border-radius: 1rem;
    width: 30rem;
    margin: 5rem auto 10rem auto;
    text-align: center;


    h2 {
      color: #8c777c;
    font-weight: 600;
    font-size: 1.5rem;
    letter-spacing: 1px;
    }
  }

  .air-info-display {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin: 3rem 10rem;

    .about-aqi,
    .about-woldfires {
      border: 10px solid lightblue;
      border-radius: 3rem;
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
    }
  }

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
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .top-main-section {
      margin: 5rem 10rem 0 10rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
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
