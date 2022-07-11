import styled from "styled-components";
import AnimatedPageTransition from "../animations/AnimatedPageTransition";
import FitnessSelect from "../components/Fitness/FitnessSearch";

const FitnessPage = () => {
  return (
    <AnimatedPageTransition>
      <FitnessPageStyled>
        <h2>Choose an Exercise</h2>
        <div className="fitness-page-main">
          <FitnessSelect />
        </div>
      </FitnessPageStyled>
    </AnimatedPageTransition>
  );
};

const FitnessPageStyled = styled.section`
  min-height: 70vh;
  padding-top: 2rem;
  text-align: center;
  font-weight: 600;
  color: #243966;
  position: relative;
  h2 {
    margin-top: 2rem;
    text-align: center;
    font-size: 2rem;
  }
`;

export default FitnessPage;
