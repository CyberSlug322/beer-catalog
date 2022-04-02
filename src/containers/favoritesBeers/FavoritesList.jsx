import React from "react";
import { FavoritesCard } from "./FavoritesCard.jsx";
import './FavoritesList.scss'

export const FavoritesList = ({favoritesList}) => {
    
    return (
        <ul className="favorites-list">
            {favoritesList.map((elem, pos) =>
                <li className="favorites-list__item" key={pos}>
                    <FavoritesCard title={elem.name} tagline={elem.tagline} description={elem.description} />
                </li>
            )}
        </ul>
        )
    }
