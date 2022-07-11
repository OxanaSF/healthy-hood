import styled from 'styled-components';
import img from '../components/MentalHealth/mentalbg.jpeg';
import GratitudeQuestions from '../components/MentalHealth/GratitudeQuestions';
import MentalHealthArticles from '../components/MentalHealth/MentalHealthArticles';
import exerciseImg from '../components/MentalHealth/exercise.png';

const MentalHealthPage = () => {
  return (
    <MentalHealthPageStyled>
      <h1>Mental Health</h1>
      <IntroStyled></IntroStyled>

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
              Just 30 minutes of walking every day can help boost your mood and
              improve your health. Small amounts of exercise add up, so don’t be
              discouraged if you can’t do 30 minutes at one time.
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
              asleep, so reduce blue light exposure from your phone or computer
              before bedtime.
            </li>
            <li>
              <span className="bold-text">Try a relaxing activity. </span>
              Explore relaxation or wellness programs or apps, which may
              incorporate meditation, muscle relaxation, or breathing exercises.
              Schedule regular times for these and other healthy activities you
              enjoy such as journaling.
            </li>
            <li>
              <span className="bold-text">Set goals and priorities. </span>
              Decide what must get done now and what can wait. Learn to say “no”
              to new tasks if you start to feel like you’re taking on too much.
              Try to be mindful of what you have accomplished at the end of the
              day, not what you have been unable to do.
            </li>
            <li>
              <span className="bold-text">Practice gratitude. </span>
              Remind yourself daily of things you are grateful for. Be specific.
              Write them down at night, or replay them in your mind.
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

          <div className='iframe-container'>
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
          <div className='mental-health-news'>
            <h2>Check out news about mental health</h2>
            <MentalHealthArticles />
          </div>
        </div>
      </main>
    </MentalHealthPageStyled>
  );
};

const MentalHealthPageStyled = styled.section`
  min-height: 70vh;

  main {
    display: grid;
    grid-template-columns: 1fr 1.7fr;
    margin: 3rem 10rem;
    gap: 3rem;
    
    .right-col {
      display: grid;
      grid-template-rows: 1fr 1fr 1.7fr;
      gap: 3rem;

      .iframe {
        border: 10px solid rgb(254, 233, 218);
        border-radius: 3rem;
        width: 100%;
        height: 25rem;
      }
    }

    .mental-health-news {

      h2 {
        font-size: 1.4rem;
      text-align: center;
      padding-bottom: 2rem;
      }
     
    }

    ul li {
      list-style-image: url('exerciseImg');
    }
  }

  h1 {
    font-size: 4.5rem;
    font-weight: 600;
    color: #243966;
    margin: 4rem 0;
  }

  .health-care-tips {
    width: 100%;
    border: 10px solid rgb(254, 233, 218);
    border-radius: 3rem;
    padding: 2rem;
    line-height: 2.5;
    color: #243966;

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
`;

const IntroStyled = styled.div`
  border: 10px solid rgb(254, 233, 218);
  border-radius: 3rem;
  min-height: 34rem;
  width: 80%;
  margin: auto;
  background-image: url(${img});
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export default MentalHealthPage;
