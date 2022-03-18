import React from "react";
import BeerCard from "../beerCard/BeerCard.jsx";

const BeerList = () => {
    const staticBeerArray = [{name:"Buzz1",tagline:"A Real Bitter Experience."},{name:"Buzz2",tagline:"A Real Bitter Experience."},
                            {name:"Buzz3",tagline:"A Real Bitter Experience."},{name:"Buzz4",tagline:"A Real Bitter Experience."},
                            {name:"Buzz5",tagline:"A Real Bitter Experience."},{name:"Buzz6",tagline:"A Real Bitter Experience."},
                            {name:"Buzz7",tagline:"A Real Bitter Experience."},{name:"Buzz8",tagline:"A Real Bitter Experience."},
                            {name:"Buzz9",tagline:"A Real Bitter Experience."},{name:"Buzz10",tagline:"A Real Bitter Experience."},
                            {name:"Buzz11",tagline:"A Real Bitter Experience."},]

    return staticBeerArray.map((elem) => <BeerCard title={elem.name} tagline={elem.tagline}/>)
}

export default BeerList;
