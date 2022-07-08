<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import NutritionsPage from "./NutritionsPage";
import FitnessPage from "./FitnessPage";
import AirQualityPage from "./AirQualityPage";
import CityAirSearchBar from "../components/CityAirSearchBar";
import CitiesList from "../components/CitiesList";
import CityAirInfoFetched from "../components/CityAirInfoFetched.js";
import FitnessList from "../components/FitnessList";
=======
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import NutritionsPage from './NutritionsPage';
import FitnessPage from './FitnessPage';
import AirQualityPage from './AirQualityPage';
import CityAirSearchBar from '../components/AirQuality/CityAirSearchBar';
import CitiesList from '../components/AirQuality/CitiesList';
import CityAirInfoFetched from '../components/AirQuality/CityAirInfoFetched';
import { AnimatePresence } from 'framer-motion';
>>>>>>> 96421d33eff7ea1ee859c6d65b23e271a9a67d44

const Pages = () => {
  const location = useLocation();

  return (
<<<<<<< HEAD
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nutritions" element={<NutritionsPage />} />
      <Route path="/fitness" element={<FitnessPage />}>
        <Route path="exercises" element={<CityAirSearchBar />}>
          <Route path=":name" element={<FitnessList />} />
        </Route>
      </Route>

      <Route path="/clean-air" element={<AirQualityPage />}>
        <Route path="search" element={<CityAirSearchBar />}>
          <Route path=":name" element={<CityAirInfoFetched />} />
=======
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname.split('/')[1]}>
        <Route path="/" element={<Home />} />
        <Route path="/nutritions" element={<NutritionsPage />} />
        <Route path="/fitness" element={<FitnessPage />} />

        <Route path="/clean-air" element={<AirQualityPage />}>
          <Route path="search" element={<CityAirSearchBar />}>
            <Route path=":name" element={<CityAirInfoFetched />} />
          </Route>
          <Route path="list" element={<CitiesList />} />
>>>>>>> 96421d33eff7ea1ee859c6d65b23e271a9a67d44
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
