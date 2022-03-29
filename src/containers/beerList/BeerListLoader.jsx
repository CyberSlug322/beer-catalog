import React,{ useEffect, useState } from "react";
import ErrorMessage from "../../components/error/ErrorMessage.jsx";
import { fetchBeers, fetchFilteredBeers } from "../../utils/api";
import { LoadingSpinner } from "../loadingSpinner/LoadingSpinner.jsx";
import { BeerList } from './BeerList.jsx'

export const BeerListLoader = ({input, alcoholVolume, IBU, EBC}) => {
    const [requestStatus, setRequestStatus] = useState({isLoading: true, isError: false})
    const [beers, setBeers] = useState([]);

    useEffect(
        async () => {
            try {
                setRequestStatus({isLoading: true, isError: false})
                const beersList = await fetchBeers(1, input)
                setBeers(beersList)
                setRequestStatus({isLoading: false, isError: false})
            } catch (e) {
                console.log(e)
                setRequestStatus({isLoading: false, isError: true})
            }
        },[input]) 

    return (
        <div className="beer-list-loader">
            <BeerList beersArray={beers}/>
            {requestStatus.isError && <ErrorMessage>An error has occurred</ErrorMessage>}
            {requestStatus.isLoading && <LoadingSpinner className="beer-list-loader__loading-spinner"/>}
        </div>
    )
}