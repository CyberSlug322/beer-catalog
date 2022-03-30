import React from "react";
import { SideMenu } from "./SideMenu.jsx";

export const SideMenuBlock = ({onMenuButtonClick, className}) => (

    <div onClick={onMenuButtonClick} className={`${className}-block`}>
        <SideMenu className={className}/>
    </div>
)