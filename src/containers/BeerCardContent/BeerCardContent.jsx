import React from "react";
import {Button} from "../../components/beerButton/Button.jsx";
import './BeerCardContent.scss';

export const BeerCardContent = ({title, tagline}) => (
    <div className="beer-card-content">
    <h1 className="h1-font">{title}</h1>
    <h2 className="h2-font">{tagline}</h2>
    <Button name="OPEN" onClick={() => {throw new Error()}}/>
    <Button name="Favorites" onClick={() => {throw new Error()}}/>
  </div>
  
);


