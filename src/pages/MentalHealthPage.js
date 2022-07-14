import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import img from '../components/MentalHealth/mentalbg.jpeg';
import GratitudeQuestions from '../components/MentalHealth/GratitudeQuestions';
import MentalHealthArticles from '../components/MentalHealth/MentalHealthArticles';
import exerciseImg from '../components/MentalHealth/exercise.png';

import { motion } from 'framer-motion';

import {
  slidesFromLeftLeaveToLeft,
  slidesFromRightftLeaveToRight,
} from '../animations/animation';
import AnimatedPage from '../animations/AnimatedPageTransition';

const MentalHealthPage = () => {
  return (
    <AnimatedPage>
      <MentalHealthPageStyled>
        <h1>Mental Health</h1>
        <motion.div
          className="mental-health-hero"
          variants={slidesFromLeftLeaveToLeft}
          initial="hidden"
          animate="show"
        ></motion.div>

        <main>
          <div className="health-care-tips">
            <h2>
              {' '}
              Here are some tips to help you get started with self-care from
              National Institute of Mental Health:
            </h2>

            <ul>
              <li>
                <span className="bold-text">Get regular exercise. </span>
                Just 30 minutes of walking every day can help boost your mood
                and improve your health. Small amounts of exercise add up, so
                don’t be discouraged if you can’t do 30 minutes at one time.
              </li>

              <li>
                <span className="bold-text">
                  Eat healthy, regular meals and stay hydrated.{' '}
                </span>
                A balanced diet and plenty of water can improve your energy and
                focus throughout the day. Also, limit caffeinated beverages such
                as soft drinks or coffee.
              </li>
              <li>
                <span className="bold-text">Make sleep a priority. </span>
                Stick to a schedule, and make sure you’re getting enough sleep.
                Blue light from devices and screens can make it harder to fall
                asleep, so reduce blue light exposure from your phone or
                computer before bedtime.
              </li>
              <li>
                <span className="bold-text">Try a relaxing activity. </span>
                Explore relaxation or wellness programs or apps, which may
                incorporate meditation, muscle relaxation, or breathing
                exercises. Schedule regular times for these and other healthy
                activities you enjoy such as journaling.
              </li>
              <li>
                <span className="bold-text">Set goals and priorities. </span>
                Decide what must get done now and what can wait. Learn to say
                “no” to new tasks if you start to feel like you’re taking on too
                much. Try to be mindful of what you have accomplished at the end
                of the day, not what you have been unable to do.
              </li>
              <li>
                <span className="bold-text">Practice gratitude. </span>
                Remind yourself daily of things you are grateful for. Be
                specific. Write them down at night, or replay them in your mind.
              </li>
              <li>
                <span className="bold-text">Focus on positivity. </span>
                Identify and challenge your negative and unhelpful thoughts.
              </li>
              <li>
                <span className="bold-text">Stay connected. </span>Reach out to
                your friends or family members who can provide emotional support
                and practical help.
              </li>
            </ul>
          </div>

          <div className="right-col">
            <GratitudeQuestions />

            <div className="iframe-container">
              <h2>Use this 15-minute meditation</h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/cAPDr3lDf5w"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="iframe"
              ></iframe>
            </div>
          </div>
        </main>

        <div className="mental-health-news">
          <h2>Check out news about mental health</h2>
          <MentalHealthArticles />
        </div>

        <div className="contact-us-wrapper">
          <NavLink to="/" className="contact-us">
            <button>
              <h2>CONTACT US</h2>
            </button>
          </NavLink>
        </div>
      </MentalHealthPageStyled>
    </AnimatedPage>
  );
};

const MentalHealthPageStyled = styled.section`
  .mental-health-hero {
    border: 10px solid rgb(254, 233, 218);
    border-radius: 3rem;
    min-height: 34rem;
    width: 80%;
    margin: auto;
    background-image: url(${img});
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media only screen and (max-width: 930px) {
      min-height: 18rem;
      width: 95%;
      background-position: center;
    }
  }

  main {
    display: grid;
    grid-template-columns: 1fr 1.7fr;
    margin: 3rem 10rem;
    gap: 3rem;

    .health-care-tips {
      height: 70rem;
      overflow: auto;
      text-align: justify;
      box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);

      h2 {
        margin-bottom: 2.5rem;
      }
    }

    .right-col {
      display: grid;
      grid-template-rows: 1.5fr 2fr;
      gap: 3rem;

      .iframe {
        border: 10px solid rgb(254, 233, 218);
        border-radius: 3rem;
        width: 100%;
        height: 25rem;
      }
    }

    .iframe-container {
      h2 {
        font-size: 2rem;
        color: #008e90;
        text-align: center;
        font-weight: 500;
      }
    }

    ul li {
      list-style-image: url('exerciseImg');
    }
  }

  h1 {
    font-size: 4.5rem;
    font-weight: 600;
    color: #8c777c;
    margin: 4rem 0;
  }

  .health-care-tips {
    width: 100%;
    border: 10px solid rgb(254, 233, 218);
    border-radius: 3rem;
    padding: 2rem;
    line-height: 2.5;
    color: #243966;
    color: #8c777c;

    h2 {
      font-size: 1.3rem;
      line-height: 1.9;
      text-align: left;
      font-weight: 700;
    }

    .bold-text {
      font-weight: 700;
    }
  }

  .mental-health-news {
    margin: 0 10rem;
    margin-bottom: 5rem;
    padding: 5rem;

    h2 {
      font-size: 1.4rem;
      text-align: center;
      padding-bottom: 2rem;
      color: #243966;
      color: #8c777c;
      font-size: 2.4rem;
      font-weight: 500;
    }
  }
  .contact-us-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 7rem;
  }

  .contact-us {
    padding: 3rem;
    background-color: rgb(254, 233, 218);
    border-radius: 1rem;
    width: 30rem;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);

    text-align: center;

    h2 {
      color: #8c777c;
      font-weight: 600;
      font-size: 1.5rem;
      letter-spacing: 1px;
    }
  }

  @media only screen and (max-width: 1600px) {
    main {
      grid-template-columns: 1.4fr 1.6fr;
    }

    @media only screen and (max-width: 1300px) {
      main {
        grid-template-columns: 1.5fr 1.5fr;
      }
    }

    @media only screen and (max-width: 1150px) {
      main {
        grid-template-columns: 1fr;
      }

      .mental-health-news {
        h2 {
          font-size: 1.7rem;
        }
        margin: 0 5rem;
      }
    }
  }

  @media only screen and (max-width: 930px) {
    .mental-health-hero {
    border: 5px solid rgb(254, 233, 218);
    }
    h1 {
      font-size: 2rem;
    }

    main {
      width: 90%;
      margin: auto;
      margin-top: 2rem;

    
   

      .health-care-tips {
        border: 5px solid rgb(254, 233, 218);
        height: 30rem;
        h2 {
          font-size: 1rem;
        }

        ul li {
          font-size: 0.7rem;
        }
      }

      .right-col {
        
        .iframe {
        border: 5px solid rgb(254, 233, 218);
        height: 15rem;
        }
        .iframe-container {
          
          h2 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }
        }
      }
    }

    .mental-health-news {
      width: 90%;
      margin: auto;
      padding: 0;
      h2 {
        font-size: 1.2rem;
      }
    }

    .contact-us-wrapper {
      margin-bottom: 2rem;
    }

    .contact-us {
      width: 90%;
      margin: auto;
      padding: 2rem;
    

      h2 {
        font-size: 1.1rem;
      }
    }
  }
`;

export default MentalHealthPage;
