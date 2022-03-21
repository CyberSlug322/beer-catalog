import React from "react";
import {Button} from "../../components/beerButton/Button.jsx";
import './BeerCardContent.scss';

export const BeerCardContent = ({title, tagline}) => (

    <div className="beer-card-content">
    <h1>{title}</h1>
    <h2>{tagline}</h2>
    <Button name="OPEN" onClick={() => {throw new Error()}}/>
    <Button name="Favorites" onClick={() => {throw new Error()}}/>
  </div>
  
);


