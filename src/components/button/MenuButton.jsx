import React from "react";
import BurgerButton from '../../img/burgerButton.svg'

import './MenuButton.scss'

export const MenuButton = ({className}) => (
  <div className={`menu-button ${className}`}>
    <BurgerButton />
  </div>
)
  
  

