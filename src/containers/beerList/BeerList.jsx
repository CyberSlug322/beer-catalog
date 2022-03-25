import React, { useState } from "react";
import {BeerCard} from "../beerCard/BeerCard.jsx";

import { beerData } from "./beerData.js";
import './BeerList.scss'
import { BeerListLoader } from "./BeerListLoader.jsx";

export const BeerList = () => {
    const [beersArray, setBeersArray] = useState([]);
    const loadBeers = (newBeers) => setBeersArray([...beersArray, ...newBeers]) 
    const loadFilteredBeers = (filteredBeers) => setBeersArray(filteredBeers)
    return (
        <ul className="beer-list">
            {beerData.map((elem, pos) => <li className="beer-list__item" key={pos}><BeerCard title={elem.name} tagline={elem.tagline} /></li>)}
            <BeerListLoader loadBeers={loadBeers} loadFilteredBeers={loadFilteredBeers}/>
        </ul>
        )
    }
