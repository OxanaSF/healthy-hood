<<<<<<< HEAD
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import NutritionsPage from './NutritionsPage';
import FitnessPage from './FitnessPage';
import AirQualityPage from './AirQualityPage';
import CityAirSearchBar from '../components/AirQuality/CityAirSearchBar';
import CitiesList from '../components/AirQuality/CitiesList';
import CityAirInfoFetched from '../components/AirQuality/CityAirInfoFetched';
import { AnimatePresence } from 'framer-motion';
=======
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import NutritionsPage from "./NutritionsPage";
import FitnessPage from "./FitnessPage";
import AirQualityPage from "./AirQualityPage";
import CityAirSearchBar from "../components/AirQuality/CityAirSearchBar";
import CitiesList from "../components/AirQuality/CitiesList";
import CityAirInfoFetched from "../components/AirQuality/CityAirInfoFetched";
import { AnimatePresence } from "framer-motion";
>>>>>>> 32e8bc6f643b4ba51a3c43ebb92373b05fd92c7b

const Pages = () => {
  const location = useLocation();

  return (

    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname.split("/")[1]}>
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
    </AnimatePresence>
  );
};

export default Pages;
