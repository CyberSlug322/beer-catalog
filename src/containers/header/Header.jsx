import './Header.scss'
import React from "react";
import {MenuButton} from '../../components/button/MenuButton.jsx';

export const Header = () => (
    <header className='Header Layout-Header'>
      <MenuButton/>
      <label>Beer Catalog </label>
    </header>
);


