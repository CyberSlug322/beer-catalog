import React,{ useEffect, useState } from "react";
import { fetchBeers } from "../../utils/api";

export const BeerListLoader = () => {
    const [isLoading, setIsLoading] = useState(false)
    useEffect( async () => {
        const beersList = await fetchBeers()
        console.log(beersList)
    },[])

    return (
        <div>
        {isLoading && <label>Loading...</label>}
        </div>
    )
}