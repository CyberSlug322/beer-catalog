import React,{ useEffect, useState } from "react";
import ErrorMessage from "../../components/error/ErrorMessage.jsx";
import { fetchBeers } from "../../utils/api";
import { LoadingSpinner } from "../loadingSpinner/LoadingSpinner.jsx";
import { BeerList } from './BeerList.jsx'
import { Placeholder } from "Placeholder/Placeholder.jsx";
import './BeerListLoader.scss';

export const BeerListLoader = ({input, alcoholVolume, IBU, EBC}) => {
    const [requestStatus, setRequestStatus] = useState({isLoading: true, isError: false})
    const [beers, setBeers] = useState([]);

    useEffect(
        async () => {
            try {
                setRequestStatus({isLoading: true, isError: false})
                const beersList = await fetchBeers(1, input, alcoholVolume, IBU, EBC)
                setBeers(beersList)
                setRequestStatus({isLoading: false, isError: false})
            } catch (e) {
                console.log(e)
                setRequestStatus({isLoading: false, isError: true})
            }
        },[input, alcoholVolume, IBU, EBC]) 

    return (
        <div className="beer-list-loader">       
            {beers.length ?
                <BeerList beersArray={beers}/> :
                <Placeholder content="cannot find beers which match your request" className="beer-list-loader__placeholder"/> }     
            {requestStatus.isError && <ErrorMessage>An error has occurred</ErrorMessage>}
            {requestStatus.isLoading && <LoadingSpinner className="beer-list-loader__loading-spinner"/>}
        </div>
    )
}