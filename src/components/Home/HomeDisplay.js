import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { slidesFromLeftLeaveToRight } from '../../animations/animation';
// import ScrollToTop from '../ScrollToTop'

const HomeDisplay = () => {
  return (
    <HomeDisplayStyled>
      {/* <ScrollToTop /> */}
      <motion.div
        className="categories-container"
        variants={slidesFromLeftLeaveToRight}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="container container-1">
          <Link to="/nutritions" className="box box1" id="order-1">
            <img
              src={`${process.env.PUBLIC_URL}/images/nutritions.jpeg`}
              alt="nutritions"
            />
            <div className="text-over text-over-nutritions">Nutritions</div>
          </Link>

          <div className="container-description" id="order-2">
            <p>
              Often, we are only concerned about pleasing our taste buds and not
              caring about our health. But unfortunately, the unhealthy and
              convenient food that we consume daily to cut down cooking time and
              effort from our busy schedule poses an unimaginable threat to our
              bodies. It might be a tad bit difficult for you to switch to a
              healthy diet altogether after consuming unhealthy food for a long
              time, but with some patience and effort, you will get used to it
              and eventually lead a healthy life.
            </p>

            <Link to="/nutritions">
              <img
                src={`${process.env.PUBLIC_URL}/images/left-arrow.png`}
                alt="arrow to the left"
                className="img-arrow-left"
              />
            </Link>
          </div>
        </div>

        <div className="container container-2">
          <div className="container-description" id="order-1">
            <p>
              While all types of pollution are extremely dangerous, air
              contaminants represent about 66% of the total deaths alluded to
              mass contamination. Besides the fact that contaminants move faster
              when airborne, it’s very easy to get exposed to air pollution.
              Simply breathing contaminated air can result in severe health
              complications, so aiming to reduce the amount of airborne
              pollution is critical for human beings in general.
            </p>
            <Link to="/clean-air">
              <img
                src={`${process.env.PUBLIC_URL}/images/right-arrow.png`}
                alt="arrow to the right"
                className="img-arrow-right"
              />
            </Link>
          </div>

          <Link to="/clean-air" className="box box2" id="order-2">
            <img src={`${process.env.PUBLIC_URL}/images/air.jpeg`} alt="air" />
            <div className="text-over">Clean air</div>
          </Link>
        </div>

        <div className="container container-3">
          <Link to="/fitness" className="box box3" id="order-1">
            <img
              src={`${process.env.PUBLIC_URL}/images/fitness.jpeg`}
              alt="fitness"
            />
            <div className="text-over">Fitness</div>
          </Link>
          <div className="container-description" id="order-2">
            <p>
              One of the most essential things you can do to maintain good
              health is to incorporate physical fitness into your regular
              routine. Individuals who are at a healthy weight and who are
              physically active live seven years longer on average than
              individuals who are obese and aren’t active. Being active helps
              prevent or delay chronic diseases and illnesses linked with aging.
              Therefore, active adults maintain their independence and quality
              of life longer as they age.
            </p>
            <Link to="/fitness">
              <img
                src={`${process.env.PUBLIC_URL}/images/left-arrow.png`}
                alt="arrow to the left"
                className="img-arrow-left"
              />
            </Link>
          </div>
        </div>

        <div className="container container-4">
          <div className="container-description" id="order-1">
            <p>
              Mental health includes our emotional, psychological, and social
              well-being. It affects how we think, feel, and act. It also helps
              determine how we handle stress, relate to others, and make
              choices. Mental health is important at every stage of life, from
              childhood and adolescence through adulthood.
            </p>
            <Link to="/mental-health">
              <img
                src={`${process.env.PUBLIC_URL}/images/right-arrow.png`}
                alt="arrow to the right"
                className="img-arrow-right"
              />
            </Link>
          </div>

          <Link to="/mental-health" className="box box3" id="order-2">
            <img
              src={`${process.env.PUBLIC_URL}/images/mental.jpeg`}
              alt="fitness"
            />
            <div className="text-over">Mental Health</div>
          </Link>
        </div>
      </motion.div>
    </HomeDisplayStyled>
  );
};

const HomeDisplayStyled = styled.section`
  min-height: 30vh;
  margin: 8rem 0;

  h2 {
    text-align: center;
    margin-bottom: 6rem;
  }

  .container {
    margin: 0 10rem 5rem 10rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  p {
    display: flex;
    align-items: center;
    color: #243966;
    color: #8c777c;
    font-size: 1.2rem;
    line-height: 2;
    text-indent: 4em;
    margin-top: 1rem;
  }

  .container-description {
    margin: 0;
  }

  .img-arrow-right {
    float: right;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    padding: 1rem;
    cursor: pointer;
  }
  .img-arrow-left {
    float: left;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    padding: 1rem;
    cursor: pointer;
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
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
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

  @media only screen and (max-width: 1300px) {
    p {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 1150px) {
    p {
      font-size: 1.2rem;
      color: #8c777c;
    }
    .container {
      grid-template-columns: 1fr;
      margin: 0 4rem;
    }

    .container-2 > #order-1 {
      order: 2;
    }
    .container-2 > #order-2 {
      order: 1;
    }

    .container-4 > #order-1 {
      order: 2;
    }
    .container-4 > #order-2 {
      order: 1;
    }

    .img-arrow-right,
    .img-arrow-left {
      opacity: 0;
    }
  }

  @media only screen and (max-width: 930px) {
    margin: 0;
    background-color: lightblue;
    margin-top: 3rem;
  
    .container {
      margin: 0 1rem;

      gap: 0;
    }
    .container-description {

      p {
        font-size: 0.7rem;
        padding: 0 1rem 2rem 1rem;
        border-bottom: 5px solid rgb(254, 233, 218);
        text-indent: 0;
        text-align: center;
      }
    }

    .box {
      height: 15rem;

      .text-over {
        font-size: 1.5rem;
      }
  
    }
  }
`;

export default HomeDisplay;
