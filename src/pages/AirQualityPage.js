import styled from 'styled-components';

import { NavLink, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

import ClockLoader from 'react-spinners/ClockLoader';

import {
  slidesFromLeftLeaveToLeft,
  slidesFromRightftLeaveToRight,
} from '../animations/animation';
import AnimatedPage from '../animations/AnimatedPageTransition';

const AirQualityPage = () => {
  return (
    <AnimatedPage>
      <AirQualityPageStyled>
        <div className="section">
          <motion.img
            src={`${process.env.PUBLIC_URL}/images/family-outside-no-bg.jpeg`}
            alt="family-outside"
            variants={slidesFromLeftLeaveToLeft}
            initial="hidden"
            animate="show"
            // exit="exit"
          />

          <motion.p
            variants={slidesFromRightftLeaveToRight}
            initial="hidden"
            animate="show"
            // exit="exit"
          >
            Air Quality Index (AQI) & Health Millions of people live in areas
            where air pollution can cause serious health problems. Local air
            quality can affect our daily lives. Like the weather, it can change
            from day to day. EPA developed the Air Quality Index, or AQI, to
            make information available about the health effects of the five most
            common air pollutants, and how to avoid those effects.
          </motion.p>
        </div>

        <div className="air-quality-page-main">
          <nav className="air-quality-page-nav">
            <NavLink to="/clean-air/search" className="circle1">
              <p>Get AQI in your city</p>
            </NavLink>
            <NavLink to="/clean-air/list" className="circle2">
              <p>Wildfire Tracker</p>
            </NavLink>
          </nav>

          <div>
            <Outlet />
          </div>
        </div>
      </AirQualityPageStyled>
    </AnimatedPage>
  );
};

const AirQualityPageStyled = styled.section`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  gap: 10rem;

  .section {
    margin: 5rem 10rem 0 10rem;
    display: grid;
    grid-template-columns: 1.2fr 1.6fr;
    gap: 5rem;

    p {
      border-radius: 3rem;
      color: #243966;
      border: 10px solid lightblue;
      width: 100%;
      height: 100%;
      font-size: 1.2rem;
      padding: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1.9;
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
    transform: translateY(-8rem);

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
`;

export default AirQualityPage;
