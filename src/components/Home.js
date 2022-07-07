import Hero from "./Hero"
import HomeDisplay from "./HomeDisplay"
import BmiCalculator from "./BmiCalculator/BmiCalculator"
import { motion } from "framer-motion" 
import AnimatedPage from "./AnimatedPage"


const Home = () => {
  return (
    <AnimatedPage >
        <Hero />
        <HomeDisplay />
        <BmiCalculator />
    </ AnimatedPage>
  )
}

export default Home