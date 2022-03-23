import {
    FETCH_BEER_LIST_ERROR,
    FETCH_BEER_LIST_SUCCESS,
    FETCH_BEER_LIST_REQUEST
  } from '../types/api.types' 
  import { fetchBeers } from '../../utils/api'
  
export const getBeers = () => async dispatch => {
    try {
        dispatch(fetchBeerListRequest())
        const response = await fetchBeers()
        dispatch(fetchBeerListSuccess(response))
    } catch(e) {
        dispatch(fetchBeerListError(e.message))
    }
}


  export const fetchBeerListRequest = () => ({
    type: FETCH_BEER_LIST_REQUEST,
  })
  
  export const fetchBeerListSuccess = (data) => ({
    type: FETCH_BEER_LIST_SUCCESS,
    payload: {
        ...data
    }
  })
  
  export const fetchBeerListError = (errorMessage) => ({
    type: FETCH_BEER_LIST_ERROR,
    payload: {
        errorMessage
    }
  })