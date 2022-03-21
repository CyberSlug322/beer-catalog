import React from "react";
import {BeerCard} from "../beerCard/BeerCard.jsx";

import { beerData } from "./beerData.js";
import './BeerList.scss'

export const BeerList = () => {
    return beerData.map((elem, pos) => <BeerCard title={elem.name} tagline={elem.tagline} key={pos}/>)
}


