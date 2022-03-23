import './Header.scss'
import React from "react";
import {MenuButton} from '../../components/button/MenuButton.jsx';
import './Header.scss'
export const Header = ({className}) => (
    <header className={`header ${className} `}>
      <MenuButton/>
      <label className='header__title font-h1'>Beer Catalog </label>
    </header>
);


