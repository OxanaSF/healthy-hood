import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import NutritionsPage from "./NutritionsPage";
import FitnessPage from "./FitnessPage";
import AirQualityPage from "./AirQualityPage";
import CityAirSearchBar from "../components/AirQuality/CityAirSearchBar";
import CityAirInfoFetched from "../components/AirQuality/CityAirInfoFetched";
import MentalHealthPage from "./MentalHealthPage";
import RecipeVideos from "../components/Nutrition/RecipeVideos";
import SearchNutritionValue from "../components/Nutrition/SearchNutritionValue";
import Wildfires from "../components/AirQuality/Wildfires";
import Profile from "../pages/Profile"

import { AnimatePresence } from 'framer-motion';


import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'


const Pages = () => {
  const [data, setData] = useState([]);
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <DndProvider backend={HTML5Backend}>
      <Routes location={location} key={location.pathname.split("/")[1]}>
        <Route path="/" element={<Home />} />
        <Route path="/nutritions" element={<NutritionsPage />}>
          <Route path="recipe-videos" element={<RecipeVideos />} />
          <Route
            path="search-by-nutrition"
            element={<SearchNutritionValue />}
          />
        </Route>

        <Route path="/fitness" element={<FitnessPage />}></Route>
        <Route
          path="/clean-air"
          element={<AirQualityPage data={data} setData={setData} />}
        >
          <Route path="search" element={<CityAirSearchBar />}>
            <Route path=":name" element={<CityAirInfoFetched />} />
          </Route>
          <Route
            path="wildfires"
            element={<Wildfires data={data} setData={setData} />}
          />
        </Route>
        <Route path="/mental-health" element={<MentalHealthPage />} />
        <Route path="/savedpages" element={<Profile />} />
      </Routes>
      </DndProvider>
    </AnimatePresence>
  );
};

export default Pages;
