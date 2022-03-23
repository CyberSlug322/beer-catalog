import { FETCH_BEER_LIST_REQUEST, FETCH_BEER_LIST_SUCCESS, FETCH_BEER_LIST_ERROR } from "../types/api.types"

const initialState = {
    loading: false,
    beers: [],
    error: null
  };

export const beersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BEER_LIST_REQUEST:
        return {
          ...state,
          loading: true
        };
      case FETCH_BEER_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          beers: [...state.beers, action.payload]
        };
      case FETCH_BEER_LIST_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      default:
        return state;
    }
  }