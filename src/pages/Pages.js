import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import NutritionsPage from "./NutritionsPage";
import FitnessPage from "./FitnessPage";
import AirQualityPage from "./AirQualityPage";
import CityAirSearchBar from "../components/AirQuality/CityAirSearchBar";
import CitiesList from "../components/AirQuality/CitiesList";
import CityAirInfoFetched from "../components/AirQuality/CityAirInfoFetched";
import { AnimatePresence } from "framer-motion";
import FitnessList from "../components/fitness/FitnessList";
import FitnessSearchBar from "../components/fitness/FitnessSearch";
import RecipeVideos from "../components/RecipeVideos";
import SearchNutritionValue from "../components/SearchNutritionValue";

const Pages = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname.split("/")[1]}>
        <Route path="/" element={<Home />} />
        <Route path="/nutritions" element={<NutritionsPage />}>
          <Route path="recipe-videos" element={<RecipeVideos />} />
          <Route
            path="search-by-nutrition"
            element={<SearchNutritionValue />}
          />
        </Route>
        <Route path="/fitness" element={<FitnessPage />}>
          <Route path="exercises" element={<FitnessSearchBar />}>
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
    </AnimatePresence>
  );
};

export default Pages;
