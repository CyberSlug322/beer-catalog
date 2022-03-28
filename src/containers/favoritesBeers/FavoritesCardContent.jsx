import React from "react";
import {Button} from "../../components/beerButton/Button.jsx";
import './FavoritesContent.scss'

export const FavoritesCardContent = ({title, tagline, description}) => (

    <div className="favorites-card-content">
    <h1 className="font-h1 favorites-card-content__title">{title}</h1>
    <h2 className="font-h2 favorites-card-content__title">{tagline}</h2>
    <h3 className="font-h2 favorites-card-content__title">{description}</h3>
    <Button name="OPEN" className="favorites-card-content__open-button" onClick={() => {throw new Error()}}/>
    <Button name="Favorites" className="favorites-card-content__favorites-button" onClick={() => {throw new Error()}}/>
  </div>
  
);


