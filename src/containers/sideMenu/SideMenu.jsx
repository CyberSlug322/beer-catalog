import React from "react";
import './SideMenu.scss'
import { SideMenuHeader } from "./SideMenuHeader.jsx";
import { SideMenuNavigation } from "./SideMenuNavigation.jsx";

export const SideMenu = ({className}) => (
  <div className={`side-menu ${className}`} onClick={(e)=> e.stopPropagation()}> 
    <SideMenuHeader className="side-menu__header"/>
    <SideMenuNavigation className="side-menu__nav-bar"/>
  </div>
);


