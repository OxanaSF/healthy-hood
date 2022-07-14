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

        <motion.div className="air-quality-page-intro"
          variants={slidesFromLeftLeaveToLeft}
          initial="hidden"
          animate="show"
          >
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
        </motion.div>

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
            {/* <p> */}
            Air Quality Index (AQI) & Health Millions of people live in areas
            where air pollution can cause serious health problems. Local air
            quality can affect our daily lives. Like the weather, it can change
            from day to day. EPA developed the Air Quality Index, or AQI, to
            make information available about the health effects of the five most
            common air pollutants, and how to avoid those effects.
            {/* </p> */}
          </div>
          <div className="about-woldfires">
            {/* <p> */}
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
            {/* </p> */}
          </div>
        </div>

        <NavLink to="/" className="contact-us">
          <button>
            <h2>CONTACT US</h2>
          </button>
        </NavLink>
      </AirQualityContainerStyled>
    </AnimatedPage>
  );
};

const AirQualityContainerStyled = styled.section`
  /* @media only screen and (max-width: 4000px) { */

  /* fill: white; */

  display: flex;
  flex-direction: column;

  /* Start h1 */
  h1 {
    font-size: 4.5rem;
    font-weight: 600;
    color: #243966;
    color: #8c777c;
    margin: 4rem 0;
    text-align: center;
  }

  @media only screen and (max-width: 930px) {
    h1 {
      font-size: 3rem;
      margin: 1rem 0;
    }
  }
  /* End h1 */

  /* Start Contact section */
  .contact-us {
    padding: 3rem;
    background-color: rgb(254, 233, 218);
    border-radius: 1rem;
    width: 30rem;
    margin: 5rem auto 10rem auto;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
    text-align: center;

    h2 {
      color: #8c777c;
      font-weight: 600;
      font-size: 1.5rem;
      letter-spacing: 1px;
    }
  }

  @media only screen and (max-width: 930px) {
    .contact-us {
      padding: 2rem;
      background-color: rgb(254, 233, 218);
      border-radius: 1rem;
      width: 90%;
      margin: 5rem auto;
      text-align: center;
    }
  }

  /* End Contact section */

  /* Start Air Info display */
  .air-info-display {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin: 3rem 10rem;

    .about-aqi,
    .about-woldfires {
      border: 10px solid lightblue;
      border-radius: 3rem;
      color: #8c777c;
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
      box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
    }
  }

  @media only screen and (max-width: 930px) {
    .air-info-display {
      grid-template-columns: 1fr;
      gap: 2rem;
      margin: 0;
      padding: 0;

      .about-aqi,
      .about-woldfires {
        border: 5px solid rgb(254, 233, 218);
        border-radius: 3rem;
        width: 90%;
        margin: 0 auto;
        height: 100%;
        font-size: 0.8rem;
        padding: 1rem;
        text-align: center;
      }
    }
  }
  /* End Air Info display */

  /* Start air-quality-page-intro */
  .air-quality-page-intro {
    margin: 0 10rem 1rem 10rem;
    color: #8c777c;
    font-size: 1.6rem;
    text-align: center;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
    padding: 2rem;
    border-radius: 3rem;
  }

  @media only screen and (max-width: 930px) {
    .air-quality-page-intro {
      margin: 0 1rem;
      color: #8c777c;
      font-size: 0.9rem;
      border: 5px solid rgb(254, 233, 218);
      padding: 0.8rem;
      border-radius: 3rem;
    }
  }

  /* End air-quality-page-intro */

  /* Start air-quality-page-main */
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
        color: #8c777c;
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
        box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);

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
        box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
      }
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
        color: #8c777c;
        font-weight: 600;
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
        box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
      }
      .circle2 {
        animation: circle2 4s;
        clip-path: circle(75%);
        height: 10rem;
        width: 20rem;
        box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
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

  @media only screen and (max-width: 920px) {
    /* background: red; */
    gap: 2rem;

    .air-quality-page-main {
      .top-main-section {
        margin: 1rem;
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;

        .list-clean-air-benefits {
          border-radius: 3rem;
          border: 5px solid rgb(254, 233, 218);
          font-size: 1rem;
          padding: 1.2rem;
          line-height: 1.7;
          text-align: left;

          h3 {
            font-size: 1.1rem;
            font-weight: 500;
          }
        }

        img {
          background-color: rgb(254, 233, 218);
        }
      }

      nav {
        margin: 0 1rem;
        gap: 1.5rem;
        font-size: 3rem;

        a {
          color: #8c777c;
          font-weight: 600;
          background-color: rgb(254, 233, 218);
          padding: 1rem;
          font-size: 0.8rem;
          border-radius: 2rem;
        }

        .circle1 {
          animation: circle1 3s;
          clip-path: circle(75%);
          height: 6rem;
          width: 10rem;
        }
        .circle2 {
          animation: circle2 4s;
          clip-path: circle(75%);
          height: 6rem;
          width: 10rem;
        }

     
      }
    }
  }

  /* End air-quality-page-main */
`;

export default AirQualityPage;
