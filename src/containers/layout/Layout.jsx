import React from "react";
import {Header} from "../header/Header.jsx";

import './Layout.scss'

export const Layout = ({children}) => (
  <div className="Layout">
    <Header headerElementClassName={"layout__header"}/>
    {children} 
  </div>
);


