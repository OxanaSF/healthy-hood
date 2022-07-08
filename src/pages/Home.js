import Hero from '../components/Hero';
import HomeDisplay from '../components/HomeDisplay';
import BmiCalculator from '../components/BmiCalculator/BmiCalculator';
import AnimatedPageTransition from '../animations/AnimatedPageTransition';

const Home = () => {
  return (
    <AnimatedPageTransition>
      <Hero />
      <HomeDisplay />
      <BmiCalculator />
    </AnimatedPageTransition>
  );
};

export default Home;
