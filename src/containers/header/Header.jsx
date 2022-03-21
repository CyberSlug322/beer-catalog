import './Header.scss'
import React from "react";
import {MenuButton} from '../../components/button/MenuButton.jsx';
import './Header.scss'
export const Header = () => (
    <header className='header layout-header'>
      <MenuButton/>
      <label className='header-text'>Beer Catalog </label>
    </header>
);


