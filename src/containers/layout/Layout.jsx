import React from "react";
import {Header} from "../header/Header.jsx";

import './Layout.scss'

export const Layout = ({children}) => (
  <div className="layout">
    <Header className="layout__header"/>
    {children} 
  </div>
);


