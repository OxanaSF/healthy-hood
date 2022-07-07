import Hero from "./Hero"
import HomeDisplay from "./HomeDisplay"
import BmiCalculator from "./BmiCalculator/BmiCalculator"
import { motion } from "framer-motion" 


const Home = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exitt={{opacity: 0}}
    >
        <Hero />
        <HomeDisplay />
        <BmiCalculator />
    </motion.div>
  )
}

export default Home