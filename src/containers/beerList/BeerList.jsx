import React from "react";
import {BeerCard} from "../beerCard/BeerCard.jsx";

import './BeerList.scss'

export const BeerList = ({beersArray}) => {
    
    return (
        <ul className="beer-list">
            {beersArray.map((elem, pos) =>
            <li className="beer-list__item" key={pos}>
                <BeerCard title={elem.name} tagline={elem.tagline} />
            </li>
            )}
        </ul>
        )
    }
