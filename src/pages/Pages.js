import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import NutritionsPage from './NutritionsPage'
import FitnessPage from './FitnessPage'
import AirQuality from './AirQualityPage'

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nutritions" element={<NutritionsPage/>} />
      <Route path="/fitness" element={<FitnessPage  />} />
      <Route path="/air" element={<AirQuality  />} />
    </Routes>
  );
};

export default Pages;
