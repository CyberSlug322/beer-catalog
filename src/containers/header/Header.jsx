import './Header.scss'
import React from "react";
import {MenuButton} from '../../components/button/MenuButton.jsx';
import './Header.scss'
export const Header = ({headerElementClassName}) => (
    <header className={`header ${headerElementClassName} font-size-h1`}>
      <MenuButton/>
      <label className='header-text'>Beer Catalog </label>
    </header>
);


