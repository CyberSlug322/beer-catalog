import React from "react";
import './Button.scss'

export const Button = ({name, onClick}) => (
  <button className="button beer-card-content__button button-font" onClick={onClick}>
      {name}
  </button>
    
  
);


