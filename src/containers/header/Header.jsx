import './Header.scss'
import React, { useState } from "react";
import { MenuButton } from '../../components/button/MenuButton.jsx';
import { SideMenu } from '../sideMenu/SideMenu.jsx';
import './Header.scss'
export const Header = ({className}) => {
  const [isMenuActive, setMenuActive] = useState(false)
  const onMenuButtonClick = () => setMenuActive(!isMenuActive)

  return (
    <header className={`header ${className} `}>
      {isMenuActive ? <SideMenu className="header__side-menu" onMenuButtonClick={onMenuButtonClick}/> :<MenuButton onMenuButtonClick={onMenuButtonClick}/>}
      <label className='header__title font-h1'>Beer Catalog </label>
    </header>
  )
};


