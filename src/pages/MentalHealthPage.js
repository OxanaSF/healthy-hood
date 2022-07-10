import styled from 'styled-components';
import img from '../components/MentalHealth/mentalbg.jpeg';

const MentalHealthPage = () => {
  return (
    <MentalHealthPageStyled>
      <h1>Mental Health</h1>
      <IntroStyled></IntroStyled>
    </MentalHealthPageStyled>
  );
};

const MentalHealthPageStyled = styled.section`
  min-height: 70vh;

  h1 {
    font-size: 4.5rem;
    font-weight: 600;
    color: #243966;
    margin: 4rem 0;
  }
`;

const IntroStyled = styled.div`
  min-height: 34rem;
  width: 80%;
  margin: auto;
  background-image: url(${img});
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default MentalHealthPage;
