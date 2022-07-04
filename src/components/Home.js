import Hero from "./Hero"
import HomeDisplay from "./HomeDisplay"
import BmiCalculator from "./BmiCalculator/BmiCalculator"


const Home = () => {
  return (
    <div>
        <Hero />
        <HomeDisplay />
        <BmiCalculator />
    </div>
  )
}

export default Home