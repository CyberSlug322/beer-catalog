import React from "react";
import Header from "../header/Header.jsx";

const Layout = ({children}) => (
  <div>
    <Header/>
    {children} 
  </div>
);

export default Layout;
