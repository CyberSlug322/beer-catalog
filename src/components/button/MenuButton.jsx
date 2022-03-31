import React from "react";
import BurgerButton from 'Images/burgerButton.svg'

import './MenuButton.scss'

export const MenuButton = ({className, onMenuButtonClick}) => (
  <div className={`menu-button ${className}` } onClick={onMenuButtonClick}>
    <BurgerButton />
  </div>
)
  
  

