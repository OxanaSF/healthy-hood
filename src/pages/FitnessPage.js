import styled from "styled-components";
import AnimatedPageTransition from "../animations/AnimatedPageTransition";
import FitnessSearchBar from "../components/Fitness/FitnessSearch";

const FitnessPage = () => {
  return (
    <AnimatedPageTransition>
      <FitnessPageStyled>
        <h2>This is a Fitness Page that is going to be created by Johnson!</h2>
        <div className="fitness-page-main">
          <FitnessSearchBar />
        </div>
      </FitnessPageStyled>
    </AnimatedPageTransition>
  );
};

const FitnessPageStyled = styled.section`
  min-height: 70vh;
  padding-top: 2rem;
  text-align: center;

  position: relative;
  h2 {
    margin-top: 5rem;
    text-align: center;
    font-size: 2rem;
  }
`;

export default FitnessPage;
