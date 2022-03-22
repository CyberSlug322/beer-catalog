import React from "react";

import DetailsPage from "../detailsPage/DetailsPage.jsx";
import FavoritesPage from "../favoritesPage/FavoritesPage.jsx";
import LandingPage from "../landingPage/LandingPage.jsx";

import {
  Route,
  Routes,
} from "react-router-dom"

import "../../styles/_variables.css"
import '../../globalStyles.css'

const App = () => (
  <div className="app font-link">
    <Routes>
        <Route path="/landing" element={<LandingPage/>} />
        <Route path="/favorites" element={<FavoritesPage/>} />
        <Route path="/details" element={<DetailsPage/>} />
    </Routes>
  </div>
);

export default App;
