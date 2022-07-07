import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <HeroStyled>
      <Link to="/">
        <h1>Healthy Hood</h1>
      </Link>
      <div className="custom-shape-divider-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </HeroStyled>
  );
};

const HeroStyled = styled.section`





  min-height: 35vh;
  background-color: rgb(254, 233, 218);
  display: flex;
  justify-content: center;
  position: relative;

  h1 {
    color: white;
    color: rgb(159, 207, 215);
  }

  .custom-shape-divider-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;

    svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 180px;
      transform: rotateY(180deg);
    }
  }

  @media only screen and (max-width: 900px) {
    min-height: 45vh;

    h1 {
      font-size: 2.8rem;
    }

    .shape-fill {
      fill: lightblue;
    }
  }

  @media only screen and (min-width: 900px) {
    h1 {
      font-size: 4rem;
    }

    .shape-fill {
      fill: #ffffff;
    }
  }

  @media only screen and (min-width: 1350px) {
    h1 {
      font-size: 5rem;
    }
  }

  @media only screen and (min-width: 1450px) {
    h1 {
      font-size: 7rem;
    }
  }
`;

export default Hero;
