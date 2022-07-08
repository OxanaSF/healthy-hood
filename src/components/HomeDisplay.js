import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeDisplay = () => {
  return (
    <HomeDisplayStyled>
      <div className="categories-container">
        <Link to="/nutritions" className="box box1">
          <img
            src={`${process.env.PUBLIC_URL}/images/nutritions.jpeg`}
            alt="nutritions"
          />
          <div className="text-over text-over-nutritions">Nutritions</div>
        </Link>

        <Link to="/clean-air" className="box box2">
          <img src={`${process.env.PUBLIC_URL}/images/air.jpeg`} alt="air" />
          <div className="text-over">Clean air</div>
        </Link>

        <Link to="/fitness" className="box box3">
          <img
            src={`${process.env.PUBLIC_URL}/images/fitness.jpeg`}
            alt="fitness"
          />
          <div className="text-over">Fitness</div>
        </Link>
      </div>
    </HomeDisplayStyled>
  );
};

const HomeDisplayStyled = styled.section`
  min-height: 30vh;
  margin: 16rem 0;

  h2 {
    text-align: center;
    margin-bottom: 6rem;
  }

  .categories-container {
    width: 90%;
    margin: auto;
    display: grid;
    gap: 2rem;

    grid-template-columns: repeat(auto-fit, minmax(37rem, 1fr));
  }

  .box {
    height: 28rem;
    border: 5px solid rgb(254, 233, 218);

    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    background-color: white;
    background-color: rgb(62, 50, 85);
    background-color: rgb(254, 233, 218);
    position: relative;
    img {
      background-color: white;
      height: 100%;
      width: 100%;
      border-radius: 3rem;
      object-fit: cover;
      cursor: pointer;
    }
  }

  .text-over {
    position: absolute;
    font-size: 4rem;
    font-weight: 800;
    top: 2rem;
    left: 2rem;
    font-family: arial;
    color: rgb(62, 50, 85);
  }
`;

export default HomeDisplay;
