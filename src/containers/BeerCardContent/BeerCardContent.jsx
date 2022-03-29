import React from "react";
import {Button} from "../../components/beerButton/Button.jsx";
import './BeerCardContent.scss';

export const BeerCardContent = ({title, tagline}) => (
    <div className="beer-card-content">
    <h1 className="font-h1 beer-card-content__title">{title}</h1>
    <h2 className="font-h2 beer-card-content__title">{tagline}</h2>
    <div className="beer-card-content__button-panel">
    <Button name="OPEN" className="beer-card-content__open-button" onClick={() => {throw new Error()}}/>
    <Button name="Favorites" className="beer-card-content__favorites-button" onClick={() => {throw new Error()}}/>
    </div>
  </div>
  
);


