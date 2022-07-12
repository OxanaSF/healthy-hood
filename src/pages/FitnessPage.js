import styled from "styled-components";
import AnimatedPageTransition from "../animations/AnimatedPageTransition";
import FitnessSelect from "../components/FitnessSection/FitnessSearch";

const FitnessPage = () => {
  return (
    <AnimatedPageTransition>
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
            health benefits, both physically and mentally. It may even help you
            live longer.
          </p>
        </div>

        <h2>Choose an Exercise</h2>
        <div className="fitness-dropdown">
          <FitnessSelect />
        </div>
      </FitnessPageStyled>
    </AnimatedPageTransition>
  );
};

const FitnessPageStyled = styled.section`
  h1 {
    font-size: 4.5rem;
    font-weight: 600;
    color: #243966;
    margin: 3rem 0;
    text-align: center;
  }
  .fitness-benefits {
    margin: 0 10rem 1rem 10rem;
    color: #243966;
    font-size: 1.6rem;
    text-align: center;
  }
  h2 {
    margin-top: 2rem;
    text-align: center;
    font-size: 2rem;
  }
`;

export default FitnessPage;
