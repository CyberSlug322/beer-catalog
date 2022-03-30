import React, { useState } from "react";
import { Header } from "../header/Header.jsx";

import { SideMenuBlock } from "../sideMenu/SideMenuBlock.jsx";

import './Layout.scss'

export const Layout = ({children}) => {
  const [isMenuActive, setMenuActive] = useState(false)
  const onMenuButtonClick = () => setMenuActive(!isMenuActive)
  
  return (
    <div className="layout">
      <Header className="layout__header" onMenuButtonClick={onMenuButtonClick}/>
      {isMenuActive && <SideMenuBlock className="layout__side-menu" onMenuButtonClick={onMenuButtonClick}/>}
      {children} 
    </div>
  )
};


