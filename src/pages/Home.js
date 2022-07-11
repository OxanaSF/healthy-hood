import Hero from '../components/Home/Hero';
import HomeDisplay from '../components/Home/HomeDisplay';
import AnimatedPageTransition from '../animations/AnimatedPageTransition';
import Intro from '../components/Home/Intro';


const Home = () => {
  return (
    <AnimatedPageTransition>
      <Hero />
      <Intro />
      <HomeDisplay />
    </AnimatedPageTransition>
  );
};

export default Home;
