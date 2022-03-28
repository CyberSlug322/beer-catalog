import React from "react";
import './SideMenu.scss'
import { Link } from "react-router-dom";

export const SideMenu = ({className, onMenuButtonClick}) => (
  <div className={`side-menu ${className}` } onBlur={onMenuButtonClick}>
    <div className="side-menu__header">
        Beer Catalog
    </div>
    <ul className="side-menu__nav-bar">
      <li><Link to="/landing">landing</Link></li>
      <li><Link to="/favorites">favorites</Link></li>
    </ul>
  </div>
);


