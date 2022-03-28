import React from "react";
import { SideMenu } from "./SideMenu.jsx";
import './SideMenuBlock.scss'

export const SideMenuBlock = ({onMenuButtonClick}) => (

    <div onClick={onMenuButtonClick} className="side-menu-block" >
        <SideMenu className="side-menu-block__side-menu"/>
    </div>
)