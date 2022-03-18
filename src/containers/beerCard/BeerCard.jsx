import React from "react";
import BeerButton from "../../components/beerButton/BeerButton.jsx";

const BeerCard = ({title, tagline}) => (
  <div>
    <img/>
    <h1>{title}</h1>
    <h2>{tagline}</h2>
    <BeerButton name="OPEN" onClick={"func"}/>
    <BeerButton name="Favorites" onClick={"func"}/>
  </div>
);

export default BeerCard;
