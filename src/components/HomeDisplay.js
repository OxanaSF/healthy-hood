import styled from "styled-components";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { slidesFromLeftLeaveToRight } from '../animations/animation';
=======
import { motion } from "framer-motion";
import { slidesFromLeftLeaveToRight } from "../animations/animation";
>>>>>>> 32e8bc6f643b4ba51a3c43ebb92373b05fd92c7b

const HomeDisplay = () => {
  return (
    <HomeDisplayStyled>
      <motion.div
        className="categories-container"
        variants={slidesFromLeftLeaveToRight}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <Link to="/nutritions" className="box box1">
          <img
            src={`${process.env.PUBLIC_URL}/images/nutritions.jpeg`}
            alt="nutritions"
          />
          <div className="text-over text-over-nutritions">Nutritions</div>
        </Link>

        <Link to="/clean-air" className="box box2">
          <img src={`${process.env.PUBLIC_URL}/images/air.jpeg`} alt="air" />
          <div className="text-over">Clean air</div>
        </Link>

        <Link to="/fitness" className="box box3">
          <img
            src={`${process.env.PUBLIC_URL}/images/fitness.jpeg`}
            alt="fitness"
          />
          <div className="text-over">Fitness</div>
        </Link>
      </motion.div>
    </HomeDisplayStyled>
  );
};

const HomeDisplayStyled = styled.section`
  min-height: 30vh;
  margin: 16rem 0;

  h2 {
    text-align: center;
    margin-bottom: 6rem;
  }

  .categories-container {
    width: 90%;
    margin: auto;
    display: grid;
    gap: 2rem;

    grid-template-columns: 1fr 1fr 1fr;
  }

  .box {
    height: 28rem;
    border: 5px solid rgb(254, 233, 218);

    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    background-color: white;
    background-color: rgb(62, 50, 85);
    background-color: rgb(254, 233, 218);
    position: relative;
    img {
      background-color: white;
      height: 100%;
      width: 100%;
      border-radius: 3rem;
      object-fit: cover;
      cursor: pointer;
    }
  }

  .text-over {
    position: absolute;
    font-size: 4rem;
    font-weight: 800;
    top: 2rem;
    left: 2rem;
    font-family: arial;
    color: rgb(62, 50, 85);
  }

  @media only screen and (max-width: 900px) {
    margin: 0;
    background-color: lightblue;

    .categories-container {
      background-color: lightblue;
      grid-template-columns: 1fr;
      padding-bottom: 5rem;
    }

    .text-over {
      font-size: 2.5rem;
      top: 2rem;
      left: 4rem;
    }
  }

  @media only screen and (max-width: 900px) {
    margin: 0;
    background-color: lightblue;

    .categories-container {
      background-color: lightblue;
      grid-template-columns: 1fr;
      padding-bottom: 5rem;
    }

    .text-over {
      font-size: 2.5rem;
      top: 2rem;
      left: 4rem;
    }
  }

  @media only screen and (max-width: 1350px) {
    .text-over {
      font-size: 2.5rem;
      top: 2rem;
      left: 3.5rem;
    }
  }

  @media only screen and (min-width: 1300px) {
    background-color: white;

    .categories-container {
      background-color: white;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default HomeDisplay;
