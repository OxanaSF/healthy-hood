import styled from 'styled-components';

const HomeDisplay = () => {
  return (
    <HomeDisplayStyled>
      <div className="categories-container">
        <div className="box box1">
          <img
            src={`${process.env.PUBLIC_URL}/images/nutritions.jpeg`}
            alt="nutritions"
          />
          <div class="text-over text-over-nutritions">Nutritions</div>
        </div>

        <div className="box box3">
          <img src={`${process.env.PUBLIC_URL}/images/air.jpeg`} 
          alt="air" 
          />
          <div class="text-over">Clear air</div>
        </div>

        <div className="box box2">
          <img
            src={`${process.env.PUBLIC_URL}/images/fitness.jpeg`}
            alt="fitness"
          />
          <div class="text-over">Fitness</div>
        </div>

       
      </div>
    </HomeDisplayStyled>
  );
};

const HomeDisplayStyled = styled.section`
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
    /* background-color: rgb(62, 50, 85); */
    border: 5px solid rgb(62, 50, 85);
    border: 5px solid rgb(254, 233, 218);
   

    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .box1,
  .box2,
  .box3 {
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
    /* -webkit-text-stroke: 2px white; */
    font-family: arial;
    color: rgb(62, 50, 85);
  }

  /* .text-over-nutritions {
      -webkit-text-stroke: 2px white;
  } */
`;

export default HomeDisplay;
