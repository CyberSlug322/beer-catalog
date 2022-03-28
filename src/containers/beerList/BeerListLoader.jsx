import React,{ useEffect, useState } from "react";
import ErrorMessage from "../../components/error/ErrorMessage";
import { fetchBeers } from "../../utils/api";
import { LoadingSpinner } from "../loadingSpinner/LoadingSpinner.jsx";
import { BeerList } from './BeerList.jsx'

export const BeerListLoader = () => {
    const [requestStatus, setRequestStatus] = useState({isLoading: true, isError: false})
    const [beers, setBeers] = useState([]);
    useEffect(
        async () => {
            try {
                const beersList = await fetchBeers()
                setBeers(beersList)
                setRequestStatus({isLoading: true, isError: false})
            } catch (e) {
                setRequestStatus({isLoading: false, isError: true})
            }        
        },[])

    return (
        <div className="beer-list-loader">
            <BeerList beersArray={beers}/>
            {requestStatus.isError && <ErrorMessage/>}
            {requestStatus.isLoading && <LoadingSpinner className="beer-list-loader__loading-spinner"/>}
        </div>
    )
}