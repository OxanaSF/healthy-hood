import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <HeroStyled>
      <Link to="/">
        <h1>Live Healthy</h1>
      </Link>
      <div className="custom-shape-divider-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="svg"
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
  height: 18rem;

  h1 {
    color: white;
    color: rgb(159, 207, 215);
    font-weight: 600;
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
      height: 10rem;
      transform: rotateY(180deg);
    
    }

    .svg {
      padding-top: 2rem;
    }
  }

  @media only screen and (max-width: 4000px) {
    fill: white;

    h1 {
      font-size: 6rem;
    }
  }

  @media only screen and (max-width: 1300px) {
    fill: white;

    h1 {
      font-size: 5rem;
    }
  }

  @media only screen and (max-width: 700px) {
    fill: lightblue;

    h1 {
      font-size: 5rem;
    }
  }

  @media only screen and (max-width: 500px) {
    fill: lightblue;

    h1 {
      font-size: 3rem;
    }
  }

  @media only screen and (max-width: 380px) {
    .custom-shape-divider-bottom {
      .svg {
        padding-top: 5rem;
      }
    }
  }

  @media only screen and (max-width: 280px) {
    height: 0;

    h1 {
      font-size: 3rem;
    }
    .custom-shape-divider-bottom {
      .svg {
        padding-top: 7rem;
      }
    }
  }
`;

export default Hero;
