import { calculateSize } from "@iconify/react";
import styled from "styled-components";
import AnimatedPageTransition from "../animations/AnimatedPageTransition";
import FitnessSelect from "../components/FitnessSection/FitnessSearch";
// import ScrollToTop from "../components/ScrollToTop";

const FitnessPage = () => {
  return (
    <AnimatedPageTransition>
      {/* <ScrollToTop /> */}
      <FitnessPageStyled>
        <h1>The Benefits of Exercise</h1>
        <div className="fitness-benefits">
          <p>
            Being physically active can improve your brain health, help manage
            weight, reduce the risk of disease, strengthen bones and muscles,
            and improve your ability to do everyday activities. Adults who sit
            less and do any amount of moderate-to-vigorous physical activity
            gain some health benefits.
          </p>
        </div>
        <div className="fitness-benefits">
          <p>
            Exercise is defined as any movement that makes your muscles work and
            requires your body to burn calories. There are many types of
            physical activity, including swimming, running, jogging, walking,
            and dancing, to name a few. Being active has been shown to have many
            health benefits, both physically and mentally.{" "}
            <b>It may even help you live longer.</b>
          </p>
        </div>
        <div
          className="select-fitness"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/fitness.png"
            })`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "20px",
            margin: "0 10vw",
            height: "30vh",
          }}
        >
          <h2 className="select">Choose an Exercise</h2>
        </div>
        <div className="fitness-dropdown">
          <FitnessSelect />
        </div>
      </FitnessPageStyled>
    </AnimatedPageTransition>
  );
};

const FitnessPageStyled = styled.section`
  color: #8c777c;
  h1 {
    font-size: 4.5rem;
    font-weight: 600;
    margin: 3rem 0;
    text-align: center;
  }
  .fitness-benefits {
    margin: 0 10rem 1rem 10rem;
    font-size: 1.6rem;
    text-align: center;
  }
  .select {
    font-size: 2rem;
    position: relative;
    top: 30px;
    font-weight: 600;
  }
  h2 {
    margin-top: 2rem;
    text-align: center;
    font-size: 2rem;
    color: black;
  }

  @media only screen and (max-width: 930px) {
    .fitness-benefits {
      margin: 1rem 1rem;
      color: #8c777c;
      font-size: 0.9rem;
      border: 5px solid rgb(254, 233, 218);
      padding: 0.8rem;
      border-radius: 2rem;
    }
  }
`;

export default FitnessPage;
