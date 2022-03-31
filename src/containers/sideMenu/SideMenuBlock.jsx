import React, {useRef} from "react";
import { SideMenu } from "./SideMenu.jsx";
import './SideMenuBlock.scss';

export const SideMenuBlock = ({onOutsideMenuClick, className}) => {
    const domRef = useRef('');
    const onOutsideClick = (e) => {
        if (e.target === domRef.current) onOutsideMenuClick() 
    }
    return (
        <div ref={domRef} onClick={onOutsideClick} className="side-menu-block">
            <SideMenu className={className}/>
        </div>
    )
}