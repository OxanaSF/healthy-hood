import styled from 'styled-components';

export const NutritionsPageStyled = styled.section`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 5rem;
    margin-bottom: 5rem;
    text-align: center;
    font-size: 2rem;
  }

  a {
    margin: 50px;
  }
  .nutritionLink {
    font-size: 1.5rem;
  }
  p {
    font-weight: bold;
    font-size: 1.5rem;
    margin: 4rem;
  }

  @media only screen and (max-width: 930px) {
    h3 {
      font-size: 1.2rem;
    }
  }
`;

export const RecipePageStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2.5rem;
  border: solid lightblue 5px;
  margin: 1rem;
  margin-top: 5rem;
  padding: 5rem 10rem;

  h2 {
    margin-top: 5rem;
    margin-bottom: 5rem;
    text-align: center;
    font-size: 2rem;
  }

  a {
    margin: 50px;
  }
  .nutritionLink {
    font-size: 1.5rem;
  }
  p {
    font-weight: bold;
    font-size: 1.5rem;
    margin: 4rem;
  }
`;

export const FormStyled = styled.form`
  padding-top: 5rem;
  margin: auto;
  position: relative;
  min-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .search-icon {
    position: absolute;
    top: 6.1rem;
    left: 1.6rem;
    font-size: 2rem;
    color: #999999;
    margin-right: 2rem;
    font-weight: 100;
  }

  input {
    border: 3px solid #9996b3;
    padding: 1rem 3rem;
    margin-bottom: 3rem;
    border-radius: 1rem;
    outline: none;
    font-size: 1rem;
    width: 100%;

    text-align: center;
    color: #999999;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .search-icon {
    font-size: 2rem;
    color: #9996b3;
    margin-right: 2rem;
    font-weight: 100;
  }

  @media only screen and (max-width: 930px) {
    input {
      width: 15rem;
    }
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  background-color: #9996b3;
  letter-spacing: 2px;
  font-weight: 600;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  color: rgb(254, 233, 218);

  &:hover {
    cursor: pointer;
    background-color: #8c777c;
  }

  @media only screen and (max-width: 930px) {
    width: 15rem;
  }
`;

export const ResultItem = styled.div`
  padding: 0.2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 3rem; */
  width: fit-content;

  img {
    border-radius: 3rem;
    border: solid 10px #9996b3;
    width: 100%;
  }

  & > img:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 930px) {
    img {
      /* margin: 0; */
    }
  }
`;

export const ResultsArea = styled.div`
  .results-wrapper {
    margin: 0 10rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }

  @media only screen and (max-width: 930px) {
    .results-wrapper {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }

  .total-result {
    color: #8c777c;
    font-size: 2.3rem;
    text-align: center;
  }

  .result-title {
    text-align: center;
    color: #9996b3;
    font-weight: 600;
  }
  @media only screen and (max-width: 930px) {
    .result-title {
      font-size: 0.8rem;
      width: 100%;
    }
  }

  .total-result {
    font-size: 1.3rem;
  }

  .result-title::first-letter {
    text-transform: capitalize;
  }

  p {
    margin-bottom: 1rem;
  }
`;

export const VideoPlayerContainer = styled.div`
  padding: 50px;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  border: solid 10px #a0daf1;
`;
