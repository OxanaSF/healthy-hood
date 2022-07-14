import styled from 'styled-components';



const Intro = () => {
  return (
    <IntroStyled>
      <p>
        Health is the greatest wealth any person could ever have. The best way
        to maintain optimal health is through healthy living. By practicing a
        healthy lifestyle, one can gain multiple health benefits. On top of
        this, it also helps a person avoid the threats of illnesses and
        diseases. Therefore, healthy living is the best thing that anyone can do
        for himself/herself.
      </p>
    </IntroStyled>
  );
};

const IntroStyled = styled.section`
  margin: 5rem 17rem 1rem 17rem;
  color: #243966;
  color: #8c777c;
  font-size: 1.6rem;
  text-align: center;
  letter-spacing: 0.1rem;

  @media only screen and (max-width: 1300px) {
    margin: 5rem 12rem 1rem 12rem;
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 1150px) {
    margin: 0;
    padding: 2rem 5rem 1rem 5rem;
    color: #8c777c;
    font-weight: 400;
  }



  @media only screen and (max-width: 500px) {
    background-color: lightblue;
    border-radius: 3rem;
    border: 5px solid rgb(254, 233, 218);
    margin: 3rem 1rem 0 1rem;
    padding: 2rem;
    font-size: 0.7rem;
    font-weight: 500;
  }


`;

export default Intro;
