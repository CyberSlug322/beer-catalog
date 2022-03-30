import React from "react";
import { BeerCard } from "../beerCard/BeerCard.jsx";
import { Placeholder } from "../../components/placeholder/Placeholder.jsx";

import './BeerList.scss'

export const BeerList = ({beersArray}) => {
    
    return (
        <ul className="beer-list">
            { beersArray.length ?
                beersArray.map((elem, pos) =>
                    <li className="beer-list__item" key={pos}>
                        <BeerCard title={elem.name} tagline={elem.tagline} />
                    </li>
                )
                : <Placeholder content="cannot find beers which match your request" className="beer-list__placeholder"/>
            }
        </ul>
        )
    }
