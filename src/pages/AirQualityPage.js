import styled from 'styled-components';

import { Link, Outlet } from 'react-router-dom';

const AirQualityPage = () => {
  return (
    <AirQualityPageStyled>
     
      <div className="section1">
        <img
          src={`${process.env.PUBLIC_URL}/images/family-outside-no-bg.jpeg`}
          alt=""
        />
      </div>

      <div className="section2">
        <p>
          Air Quality Index (AQI) & Health Millions of people live in areas
          where air pollution can cause serious health problems. Local air
          quality can affect our daily lives. Like the weather, it can change
          from day to day. EPA developed the Air Quality Index, or AQI, to make
          information available about the health effects of the five most common
          air pollutants, and how to avoid those effects.
        </p>
      </div>

      <div className="air-quality-page-main">
        <nav className="air-quality-page-nav">
          <Link to="/clean-air/search"> Search </Link>
          <Link to="/clean-air/list"> List </Link>
          <Link to="/clean-air/list"> List </Link>
          <Link to="/clean-air/list"> List </Link>
       
        </nav>

        <Outlet />
      </div>
    </AirQualityPageStyled>
  );
};

const AirQualityPageStyled = styled.section`
  .section1 {
    width: 80%;
    margin: 5rem auto;
    height: 25rem;

    border-radius: 3rem;
    background-color: lightblue;

    img {
      background-color: rgb(254, 233, 218);
      background-color: lightblue;
      height: 100%;
      width: 100%;
      border-radius: 3rem;
      object-fit: cover;
    }
  }

  .section2 {
    width: 80%;
    margin: 5rem auto;
    p {
      border-radius: 3rem;
      height: 20rem;
      color: #8c777c;
      color: #243966;
      border: 10px solid #ffbebf;
      border: 10px solid lightblue;
      background-color: white;

      width: 100%;
      height: 100%;
      font-size: 1.2rem;
      padding: 3rem;
    }
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    margin: 2rem 10rem;
    font-size: 3rem;

    a {
      color: #243966;
      background-color: lightblue;
      padding: 1rem;
      font-size: 1.8rem;
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

    }
  }
`;

export default AirQualityPage;
