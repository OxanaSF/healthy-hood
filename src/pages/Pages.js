import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import NutritionsPage from "./NutritionsPage";
import FitnessPage from "./FitnessPage";
import AirQualityPage from "./AirQualityPage";
import CityAirSearchBar from "../components/CityAirSearchBar";
import CitiesList from "../components/CitiesList";
import CityAirInfoFetched from "../components/CityAirInfoFetched.js";
import FitnessList from "../components/FitnessList";

const Pages = () => {
  return (
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
        </Route>
        <Route path="list" element={<CitiesList />} />
      </Route>
    </Routes>
  );
};

export default Pages;
