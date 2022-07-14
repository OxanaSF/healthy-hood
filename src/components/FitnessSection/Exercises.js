import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  slidesFromLeftLeaveToLeft,
  slidesFromRightftLeaveToRight,
} from "../../animations/animation";
import AnimatedPage from "../../animations/AnimatedPageTransition";

const Exercises = (props) => {
  console.log(props);
  let img = process.env.PUBLIC_URL + "/images/fitness.jpeg";
  return (
    <AnimatedPage>
      <FitnessStyle>
        <main className="fitness-info-display ">
          <div className="top-main-section">
            <motion.div
              alt="fitness-info"
              variants={slidesFromLeftLeaveToLeft}
              initial="hidden"
              animate="show"
              className="fitness-info"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/images/fitness.jpeg"
                })`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                borderRadius: "20px",
                opacity: "0.75",
              }}
            >
              <h2>Target Muscle:</h2>
              <p>{props.target}</p>
              <h2>Bodypart:</h2>
              <p>{props.bodypart}</p>
            </motion.div>
            <motion.img
              className="fitness-gif"
              variants={slidesFromRightftLeaveToRight}
              initial="hidden"
              animate="show"
              src={props.gifUrl}
            />
          </div>
        </main>
      </FitnessStyle>
    </AnimatedPage>
  );
};

const FitnessStyle = styled.section`
  .fitness-info-display {
    .top-main-section {
      margin: 5rem 10rem 0 10rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      p {
        font-size: 2rem;
        background: lightblue;
        border-radius: 20px;
        text-transform: capitalize;
        margin: 10px;
        border: 3px solid rgb(254, 233, 218);
      }
      .fitness-info::before {
        background: none;
      }
      .fitness-gif {
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
      }

      img {
        width: 50%;
        height: 50%;
        object-fit: cover;
        border-radius: 3rem;
        border: 2px solid;
      }
    }
  }
  @media only screen and (max-width: 930px) {
    .fitness-info-display {
      .top-main-section {
        display: block;
        .fitness-gif {
          border-radius: 3rem;
          color: #8c777c;
          border: 10px solid lightblue;
          width: 100%;
        }
      }
    }
  }
`;
export default Exercises;
