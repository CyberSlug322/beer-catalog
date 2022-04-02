import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { favoriteBeersReducer } from "./reducers/favoriteBeers.reducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers( {
    favoriteBeers: favoriteBeersReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))

export const persistor = persistStore(store)
export default store

