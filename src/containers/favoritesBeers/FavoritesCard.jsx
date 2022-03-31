import React from "react";
import { BeerImage } from "../beerImage/BeerImage.jsx";
import { FavoritesCardContent } from "./FavoritesCardContent.jsx";
import './FavoritesCard.scss'


export const FavoritesCard = ({title, tagline, description}) => (
  <article className="favorites-card">
    <FavoritesCardContent title={title} tagline={tagline} description={description}/>
    <BeerImage className="favorites-card__image"/>
  </article>
);

