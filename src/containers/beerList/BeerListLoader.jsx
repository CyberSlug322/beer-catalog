import React,{ useEffect, useState } from "react";
import ErrorMessage from "../../components/error/ErrorMessage.jsx";
import { fetchBeers } from "../../utils/api";
import { LoadingSpinner } from "../loadingSpinner/LoadingSpinner.jsx";
import { BeerList } from './BeerList.jsx'

export const BeerListLoader = ({input, alcoholVolume, IBU, EBC}) => {
    const [requestStatus, setRequestStatus] = useState({isLoading: true, isError: false, isAllBeersLoaded: false})
    const [beers, setBeers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;  
        setCurrentPage(currentPage + 1)
      }

    useEffect(
        () => {
        !requestStatus.isAllBeersLoaded && window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [currentPage]);

    useEffect(
        async () => {
            try {
                setRequestStatus({...requestStatus, isLoading: true, isError: false})
                setCurrentPage(1)
                const beersList = await fetchBeers(currentPage, input)
                setBeers(beersList)
                setRequestStatus({...requestStatus, isLoading: false, isError: false})
            } catch (e) {
                console.log(e)
                setRequestStatus({...requestStatus, isLoading: false, isError: true})
            }
        },[input]) 

    useEffect(
        async () => {
            if (currentPage === 1) return;
            try {
                setRequestStatus({...requestStatus, isLoading: true, isError: false})
                const beersList = await fetchBeers(currentPage, input)
                setBeers([...beers, ...beersList])
                setRequestStatus({...requestStatus, isLoading: false, isError: false, isAllBeersLoaded: beersList.length === 0})
            } catch (e) {
                console.log(e)
                setRequestStatus({...requestStatus, isLoading: false, isError: true})
            }
        },[currentPage])
    


    return (
        <div className="beer-list-loader">
            <BeerList beersArray={beers}/>
            {requestStatus.isError && <ErrorMessage>An error has occurred</ErrorMessage>}
            {requestStatus.isLoading && <LoadingSpinner className="beer-list-loader__loading-spinner"/>}
        </div>
    )
}