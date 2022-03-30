import {
    CHANGE_BEER_FAVORITES_STATE, 
    FETCH_FAVORITE_BEERS_ERROR, 
    FETCH_FAVORITE_BEERS_REQUEST, 
    FETCH_FAVORITE_BEERS_SUCCESS 
} from "../types/favoriteBeers.types"

const initialState = { favBeerIds: [] }
export const favoriteBeersReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case CHANGE_BEER_FAVORITES_STATE:
            const newBeerIds = [...state.favBeerIds]
            const beerIndex = newBeerIds.indexOf(action.id)
            if (beerIndex === -1) {
                newBeerIds.push(action.id)
            } else newBeerIds.splice(beerIndex, 1)

            return {
                ...state,
                favBeerIds: newBeerIds
            }  
        case FETCH_FAVORITE_BEERS_REQUEST:
            return {

            }
        case FETCH_FAVORITE_BEERS_SUCCESS:
            return {

            }
        case FETCH_FAVORITE_BEERS_ERROR:
            return {

            }
        default :
            return state
    }
}