import React from "react";
import './SideMenu.scss'
import { Link } from "react-router-dom";

export const SideMenu = () => (
  <div className="side-menu header__side-menu">
    <div className="side-menu__header">
        Beer Catalog
    </div>
    <ul className="side-menu__nav-bar">
      <li><Link to="/landing">landing</Link></li>
      <li><Link to="/favorites">favorites</Link></li>
    </ul>
  </div>
);


