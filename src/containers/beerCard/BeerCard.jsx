import React from "react";
import { BeerCardContent } from "../BeerCardContent/BeerCardContent.jsx";
import { BeerImage } from "../beerImage/BeerImage.jsx";
import { connect } from "react-redux";

import './BeerCard.scss'
import { selectBeerIds } from "Redux/selectors/selectors.js";
import { changeBeerFavoritesState } from "Redux/actions/favoriteBeers.actions.js";

const BeerCard = ({title, tagline, id, beerIdList, changeFavoriteState }) => {
  const onFavoritesClick = () => changeFavoriteState(id);

  return (
    <article className="beer-card">
      <BeerImage className="beer-card__image"/>
      <BeerCardContent tagline={tagline} title={title} isBeerFavorite={beerIdList.includes(id)} onFavoritesClick={onFavoritesClick}/>
    </article>
  );
}

const mapStateToProps = state => ({
  beerIdList: selectBeerIds(state)
});

const mapDispatchToProps = dispatch => ({
  changeFavoriteState: id => dispatch(changeBeerFavoritesState(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerCard)
