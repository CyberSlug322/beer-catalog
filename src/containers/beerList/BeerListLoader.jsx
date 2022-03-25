import React,{ useEffect, useState } from "react";
import { fetchBeers } from "../../utils/api";

export const BeerListLoader = ({loadBeers, loadFilteredBeers}) => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(
        async () => {
            const beersList = await fetchBeers()
            loadBeers(beersList)
            setIsLoading(false)
        },[])

    return (
        <div>
        {isLoading && <label>Loading...</label>}
        </div>
    )
}