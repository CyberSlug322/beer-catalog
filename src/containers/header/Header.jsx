import './Header.scss'
import React from "react";
import {MenuButton} from '../../components/button/MenuButton.jsx';
import './Header.scss'
import { SideMenu } from '../sideMenu/SideMenu.jsx';
export const Header = ({className}) => (
    <header className={`header ${className} `}>
      <MenuButton/>
      {/* <SideMenu className="header__side-menu"/> */}
      <label className='header__title font-h1'>Beer Catalog </label>
    </header>
);


