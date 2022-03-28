import './Header.scss'
import React from "react";
import {MenuButton} from '../../components/button/MenuButton.jsx';
import './Header.scss'
export const Header = ({className}) => (
    <header className={`header ${className} `}>
      <MenuButton className="header__menu-button"/>
      <label className='header__title font-h1'>Beer Catalog </label>
    </header>
);


