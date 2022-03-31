import './Header.scss'
import React from "react";
import {MenuButton} from '../../components/button/MenuButton.jsx';
import './Header.scss'
export const Header = ({className, onMenuButtonClick}) => (
    <header className={`header ${className} `}>
      <MenuButton onMenuButtonClick={onMenuButtonClick}/>
      <label className='header__title font-h1'>Beer Catalog </label>
    </header>
);


