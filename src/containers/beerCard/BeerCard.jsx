import React from "react";
import { BeerCardContent } from "../BeerCardContent/BeerCardContent.jsx";
import { BeerImage } from "../beerImage/BeerImage.jsx";

import './BeerCard.scss'

export const BeerCard = ({title, tagline}) => (
  <article className="beer-card">
    <BeerImage className="beer-card__image"/>
    <BeerCardContent tagline={tagline} title={title}/>
  </article>
);

