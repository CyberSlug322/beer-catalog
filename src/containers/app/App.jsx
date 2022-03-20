import React from "react";

import DetailsPage from "../detailsPage/DetailsPage.jsx";
import FavoritesPage from "../favoritesPage/FavoritesPage.jsx";
import LandingPage from "../landingPage/LandingPage.jsx";

import '../../styles/_variables.css'

import {
  Route,
  Routes,
  Link,
} from "react-router-dom"

import "../../styles/_variables.css"

const App = () => (
  <div className="app font-link">
    <ul>
      <li><Link to="/landing">landing</Link></li>
      <li><Link to="/favorites">favorites</Link></li>
      <li><Link to="/details">details</Link></li>
    </ul>
    <Routes>
        <Route path="/landing" element={<LandingPage/>} />
        <Route path="/favorites" element={<FavoritesPage/>} />
        <Route path="/details" element={<DetailsPage/>} />
    </Routes>
  </div>
);

export default App;
