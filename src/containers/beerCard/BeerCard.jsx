import React from "react";
import BeerButton from "../../components/beerButton/BeerButton.jsx";
import './BeerCard.scss'

const BeerCard = ({title, tagline}) => (
  <div className="beer-card">
    <img width={"200px"} src="https://lh3.googleusercontent.com/KewtbJtGzh0pdah3g4LihEFqY1M33nU_lRd75BlkDE7f-pelFY8B16OhAxeq21WL7wChgd9giE687H5MC8aAukMfc7qO5XI=s750"/>
    <h1>{title}</h1>
    <h2>{tagline}</h2>
    <BeerButton name="OPEN" onClick={"func"}/>
    <BeerButton name="Favorites" onClick={"func"}/>
  </div>
);

export default BeerCard;
