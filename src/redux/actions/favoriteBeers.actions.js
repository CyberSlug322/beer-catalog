import { CHANGE_BEER_FAVORITES_STATE } from "../types/favoriteBeers.types";

export const changeBeerFavoritesState = (id) => ({
    type: CHANGE_BEER_FAVORITES_STATE,
    id
})