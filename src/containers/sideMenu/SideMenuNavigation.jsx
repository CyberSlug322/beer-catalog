import React from "react";
import { Link } from "react-router-dom";

export const SideMenuNavigation = ({className}) => (

  <ul className={`${className} font-nav`}>
    <li className="side-menu-navigation__list-item"><Link to="/landing" className="side-menu-navigation__link">landing</Link></li>
    <li className="side-menu-navigation__list-item"><Link to="/favorites" className="side-menu-navigation__link">favorites</Link></li>
  </ul>
)
  