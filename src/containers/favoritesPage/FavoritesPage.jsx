import React from "react";
import { exampleBeer } from "../../utils/api.js";
import { FavoritesList } from "../favoritesBeers/FavoritesList.jsx";
import {Layout} from "../layout/Layout.jsx";
import { PaginationBlock } from "../pagination/PaginationBlock.jsx";
import './FavoritesPage.scss'

const FavoritesPage = () => (
    <Layout>
      <div className="favorites-page">
        <FavoritesList favoritesList={exampleBeer}/>
        <PaginationBlock/>
      </div>
    </Layout>
);

export default FavoritesPage;


