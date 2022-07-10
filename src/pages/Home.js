import Hero from '../components/Home/Hero';
import HomeDisplay from '../components/Home/HomeDisplay';
import AnimatedPageTransition from '../animations/AnimatedPageTransition';
import Intro from '../components/Home/Intro'
import GratitudeQuestions from '../components/GratitudeQuestions';

const Home = () => {
  return (
    <AnimatedPageTransition>
      <Hero />
      <Intro />
      <HomeDisplay />
      <GratitudeQuestions />
    </AnimatedPageTransition>
  );
};

export default Home;
