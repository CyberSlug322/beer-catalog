import React from "react";
import { exampleBeer } from "../../utils/api.js";
import { FavoritesList } from "../favoritesBeers/FavoritesList.jsx";
import {Layout} from "../layout/Layout.jsx";
import { PaginationBlock } from "../pagination/PaginationBlock.jsx";
import './FavoritesPage.scss'

const FavoritesPage = () => (
    <Layout>
      <div className="favorites-page">
        <h1 className="favorites-page__title font-h1">Your favorite beers</h1>
        <FavoritesList favoritesList={exampleBeer}/>
        <PaginationBlock className="favorites-page__pagination"/>
      </div>
    </Layout>
);

export default FavoritesPage;


