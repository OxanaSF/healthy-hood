import styled from 'styled-components';
import BmiForm from './BmiForm';

const BmiCalculator = () => {
  return (
    <BmiCalculatorStyled>
      <header className="bmiCalculator-header">
        <h2>Maintain a Healthy Weight</h2>
      </header>

      <div className="bmiCalculator-main">
        <div className="box">
          <img
            src={`${process.env.PUBLIC_URL}/images/bmi3.png`}
            alt="nutritions"
          />
        </div>
        <div>
          {' '}
          <BmiForm />
        </div>
      </div>
    </BmiCalculatorStyled>
  );
};

const BmiCalculatorStyled = styled.section`
  height: 60vh;
  border: 5px solid rgb(254, 233, 218);
  border-radius: 3rem;
  width: 90%;
  margin: auto;
  margin-bottom: 20rem;
  header {
    margin: 5rem;
    text-align: center;
    margin-bottom: 10rem;
  }

  .bmiCalculator-main {
    padding: 0 10rem;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30%;

    img {
      width: 80%;
    }
  }
`;

export default BmiCalculator;
