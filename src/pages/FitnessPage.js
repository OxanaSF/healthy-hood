import styled from "styled-components";
import AnimatedPageTransition from "../animations/AnimatedPageTransition";
import FitnessSelect from "../components/FitnessSection/FitnessSearch";

const FitnessPage = () => {
  return (
    <AnimatedPageTransition>
      <FitnessPageStyled>
        <h1>The Benefits of Exercise</h1>
        <div className="fitness-benefits">
          Being physically active can improve your brain health, help manage
          weight, reduce the risk of disease, strengthen bones and muscles, and
          improve your ability to do everyday activities. Adults who sit less
          and do any amount of moderate-to-vigorous physical activity gain some
          health benefits.
        </div>
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
  h1 {
    margin-top: 3rem;
    text-align: center;
    font-size: 2rem;
  }
  h2 {
    margin-top: 2rem;
    text-align: center;
    font-size: 2rem;
  }
`;

export default FitnessPage;
