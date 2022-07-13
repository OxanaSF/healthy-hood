import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';
import img from '../components/Nutrition/food.jpeg';

const NutritionsPage = () => {
  return (
    <NutritionsPageStyled>
      <h1>Nutritions</h1>
      <div className="intro-nutritions-page-img"></div>

      <div className="intro-nutritions-page-info">
        <img
          src={`${process.env.PUBLIC_URL}/images/grossery-bag.jpeg`}
          alt="grossery bag"
        />

        <div className="text">
          <h3>According to World Health Organization: </h3>
          <p className="paragraph">
            A healthy diet is essential for good health and nutrition. It
            protects you against many chronic noncommunicable diseases, such as
            heart disease, diabetes and cancer. Eating a variety of foods and
            consuming less salt, sugars and saturated and industrially-produced
            trans-fats, are essential for healthy diet. A healthy diet comprises
            a combination of different foods. These include:
          </p>
          <ul>
            <li>
              {' '}
              Staples like cereals (wheat, barley, rye, maize or rice) or
              starchy tubers or roots (potato, yam, taro or cassava).
            </li>
            <li> Legumes (lentils and beans).</li>
            <li> Fruit and vegetables.</li>
            <li> Foods from animal sources (meat, fish, eggs and milk).</li>
          </ul>
        </div>
      </div>

      <div className="intro-nutritions-page-main-content">
        <h2>Find a Recipe for your healthy <br></br>lifestyle today</h2>

        <div className="nutritions-page-nav">
          <Link to="recipe-videos" className="nutritionLink circle1">
            Find A Video Of A Recipe
          </Link>
          <Link to="search-by-nutrition" className="nutritionLink circle2">
            Find A Recipe By Nutritional Content
          </Link>
        </div>
        <Outlet />
      </div>

      <div className="contact-us-wrapper">
        <Link to="/" className="contact-us">
          <button>
            <h2>CONTACT US</h2>
          </button>
        </Link>
      </div>
    </NutritionsPageStyled>
  );
};

const NutritionsPageStyled = styled.section`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Start h1 */
  h1 {
    font-size: 4.5rem;
    font-weight: 600;
    color: #8c777c;
    margin: 4rem 0;
  }

  @media only screen and (max-width: 930px) {
    h1 {
      font-size: 2.5rem;
      margin: 1.6rem;
    }
  }
  /* End h1 */


  h3 {
    font-size: 2.3rem;
    color: #8c777c;

  }

  /* Start intro-nutritions-page-img */

  .intro-nutritions-page-img {
    min-height: 34rem;
    width: 80%;
    margin: auto;
    background-image: url(${img});
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    border: 10px solid rgb(254, 233, 218);
    border-radius: 3rem;
  }

  @media only screen and (max-width: 930px) {
    .intro-nutritions-page-img {
      width: 90%;
      min-height: 12rem;
      margin-bottom: 2rem;
      border: 5px solid rgb(254, 233, 218);
    }
  }

  /* End intro-nutritions-page-img */

  /* Start intro-nutritions-page-info */

  .intro-nutritions-page-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 4rem 10rem;
    margin-bottom: 0;

    h3 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 2rem;
    }

    img {
      width: 90%;
      margin: auto;
      border: 10px solid rgb(254, 233, 218);
      border-radius: 3rem;
      display: flex;
      align-items: center;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 1.7;
      background-color: rgb(254, 233, 218);
      padding: 2rem;
      border-radius: 3rem;
      color: #8c777c;
      width: 90%;
      margin: auto;

      .paragraph {
        margin-bottom: 2rem;
        line-height: 1.9;
      }
    }
  }

  @media only screen and (max-width: 930px) {
    .intro-nutritions-page-info {
      grid-template-columns: 1fr;
      gap: 2rem;
      width: 90%;
      margin: auto;
      padding: 0;

      h3 {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 2rem;
      }

      img {
        width: 80%;
        height: 100%;
        border: 5px solid rgb(254, 233, 218);
        border-radius: 3rem;
      }

      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        line-height: 1.7;
        background-color: rgb(254, 233, 218);
        padding: 2rem;
        border-radius: 3rem;
        color: #8c777c;
        font-size: 1.1rem;
     
      

        h3 {
          font-size: 1.2rem;
        }

        .paragraph {
          margin-bottom: 2rem;
          line-height: 1.9;
          font-size: 0.8rem;
          padding: 0;
        }

        ul li {
          font-size: 0.8rem;
        }
      }
    }
  }

  .intro-nutritions-page-main-content {
    h2 {
      margin: 2rem;
    }
    .intro-nutritions-page-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 4rem 10rem;
      margin-bottom: 0;

  

      h3 {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 2rem;
      }

      img {
        width: 80%;
        height: 100%;
        border: 10px solid rgb(254, 233, 218);
        border-radius: 3rem;
      }

      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        line-height: 1.7;
        background-color: rgb(254, 233, 218);
        padding: 2rem;
        border-radius: 3rem;
        color: #8c777c;

        .paragraph {
          margin-bottom: 2rem;
          line-height: 1.9;
        }
      }
    }
  }

  h2 {
    margin-top: 5rem;
    margin-bottom: 5rem;
    text-align: center;
    font-size: 2.5rem;
    color: #9996b3;
    font-weight: 600;
    
  }

  @media only screen and (max-width: 930px) {




    h2 {
      font-size: 1rem;
      margin: 2rem;
      color: #9996b3;
     
    }
  }

  a {
    margin: 50px;
  }
  .nutritionLink {
    font-size: 1.5rem;
  }





  /* Start nutritions-page-nav */
  .nutritions-page-nav {

    gap: 3rem;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;


   

    .circle1 {
      animation: circle1 3s;
      clip-path: circle(75%);
      height: 10rem;
      width: 30rem;
      background-color: rgb(254, 233, 218);
      border-radius: 3rem;
      color: #8c777c;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
  
    }
    .circle2 {
      animation: circle2 4s;
      clip-path: circle(75%);
      height: 10rem;
      width: 30rem;
      background-color: rgb(254, 233, 218);
      border-radius: 3rem;
      color: #8c777c;
      font-weight: 600;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
    }

    @keyframes circle1 {
      0% {
        clip-path: circle(75%);
      }
      50% {
        clip-path: circle(25%);
      }
      100% {
        clip-path: circle(75%);
      }
    }

    @keyframes circle2 {
      0% {
        clip-path: circle(75%);
      }
      50% {
        clip-path: circle(25%);
      }
      100% {
        clip-path: circle(75%);
      }
    }
  }

  @media only screen and (max-width: 930px) {
    .nutritions-page-nav {
     flex-direction: column;
      gap: 2rem;

      .circle1 {
        animation: circle1 3s;
        clip-path: circle(75%);
        height: 6rem;
        width: 15rem;
        margin: 0 auto;
        padding: 1rem;
        border-radius: 2rem;
        font-size: 1rem;
        text-align: center;
      }
      .circle2 {
        animation: circle2 4s;
        clip-path: circle(75%);
        height: 6rem;
        width: 15rem;
        margin: 0 auto;
        padding: 1rem;
        border-radius: 2rem;
        font-size: 1rem;
        text-align: center;
      }
    }
  }

  /* End nutritions-page-nav */

  /* Start Contact section */

  .contact-us-wrapper {
    margin: 10rem 0;
   
  }
  .contact-us {
    /* width: 40rem; */
    background-color: rgb(254, 233, 218);
    border-radius: 1rem;
    text-align: center;
    padding: 4rem 8rem;
   

    h2 {
      color: #8c777c;
      font-weight: 600;
      font-size: 1.5rem;
      letter-spacing: 1px;
    }
  }

  @media only screen and (max-width: 930px) {
    .contact-us {
      width: 90%;
      margin: auto;
      padding: 1rem;

      h2 {
        font-size: 1.1rem;
      }
    }
  }
  /* End Contact section */
`;

export default NutritionsPage;
