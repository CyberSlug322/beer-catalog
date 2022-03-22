import React from "react";
import { BeerCardContent } from "../BeerCardContent/BeerCardContent.jsx";
import { BeerImage } from "../beerImage/BeerImage.jsx";

import './BeerCard.scss'

export const BeerCard = ({title, tagline}) => (
  <div className="beer-card beer-list__beer-card">
    <BeerImage imgClassName={"beer-card__image"}/>
    <BeerCardContent tagline={tagline} title={title}/>
  </div>
);

