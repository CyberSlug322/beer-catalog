import React from "react";
import {BeerCard} from "../beerCard/BeerCard.jsx";

import { beerData } from "./beerData.js";
import './BeerList.scss'

export const BeerList = () => {
    return (
        <ul className="beer-list">
            {beerData.map((elem, pos) => <li className="beer-list__item" key={pos}><BeerCard title={elem.name} tagline={elem.tagline} /></li>)}
        </ul>
        )
    }
