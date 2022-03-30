import React from "react";
import { SideMenu } from "./SideMenu.jsx";
import './SideMenuBlock.scss';

export const SideMenuBlock = ({onMenuButtonClick, className}) => (

    <div onClick={onMenuButtonClick} className="side-menu-block">
        <SideMenu className={className}/>
    </div>
)