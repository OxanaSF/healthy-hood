import Hero from '../components/Home/Hero';
import HomeDisplay from '../components/Home/HomeDisplay';
import AnimatedPageTransition from '../animations/AnimatedPageTransition';
import Intro from '../components/Home/Intro';
import Contact from '../components/Home/Contact';

const Home = () => {
  return (
    <AnimatedPageTransition>
      <Hero />
      <Intro />
      <HomeDisplay />
      <Contact />
    </AnimatedPageTransition>
  );
};

export default Home;
