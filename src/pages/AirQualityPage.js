import styled from 'styled-components';

import { Link, Outlet } from 'react-router-dom';

const AirQualityPage = () => {
  return (
    <AirQualityPageStyled>
      <header className="air-quality-page-header">
        <h2>
          This is an Air Quality Page that I am working on now.
        </h2>
      </header>

      <div className="air-quality-page-main">
        <nav className="air-quality-page-nav">
          <Link to="/clean-air/search"> Search </Link>
          <Link to="/clean-air/list"> List </Link>
        </nav>

        <Outlet />
      </div>
    </AirQualityPageStyled>
  );
};

const AirQualityPageStyled = styled.section`
  min-height: 70vh;
  h2 {
    margin-top: 5rem;
    text-align: center;
    font-size: 2rem;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    margin: 10rem;
    font-size: 3rem;
  }
`;

export default AirQualityPage;
