import React from "react";
import BurgerButton from 'Images/burgerButton.svg'

import './MenuButton.scss'

export const MenuButton = ({className}) => (
  <div className={`menu-button ${className}`}>
    <BurgerButton />
  </div>
)
  
  

