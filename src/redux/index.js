import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { beerFilterReducer } from "./reducers/beerFilter.reducer"; 
import { beersReducer } from "./reducers/beers.reducer"; 

const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers( {
    beers: beersReducer,
    filterBeers: beerFilterReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))

export const persistor = persistStore(store)
export default store

