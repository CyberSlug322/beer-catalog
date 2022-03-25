import React,{ useEffect, useState } from "react";
import { fetchBeers } from "../../utils/api";
import { LoadingSpinner } from "../loadingSpinner/LoadingSpinner.jsx";
import { BeerList } from './BeerList.jsx'

export const BeerListLoader = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [beersArray, setBeersArray] = useState([]);
    useEffect(
        async () => {
            const beersList = await fetchBeers()
            setBeersArray(beersList)
            setIsLoading(false)
        },[])

    return (
        <div>
            <BeerList beersArray={beersArray}/>
            {isLoading && <LoadingSpinner className="beer-list-loader__loading-spinner"/>}
        </div>
    )
}