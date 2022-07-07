import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../components/Home';
import NutritionsPage from './NutritionsPage';
import FitnessPage from './FitnessPage';
import AirQualityPage from './AirQualityPage';
import CityAirSearchBar from '../components/CityAirSearchBar';
import CitiesList from '../components/CitiesList';
import CityAirInfoFetched from '../components/CityAirInfoFetched.js';
import { AnimatePresence } from 'framer-motion';


const Pages = () => {
  const location = useLocation()


  return (
    // <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      
      <Route path="/" element={<Home />} />
      <Route path="/nutritions" element={<NutritionsPage />} />
      <Route path="/fitness" element={<FitnessPage />} />
      
      <Route path="/clean-air" element={<AirQualityPage />}>
        <Route path="search" element={<CityAirSearchBar />}>
          <Route path=":name" element={<CityAirInfoFetched />} />
        </Route>
        <Route path="list" element={<CitiesList />} />
      </Route>

    </Routes>
    // </AnimatePresence>
 
  );
};

export default Pages;
