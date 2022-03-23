import React from "react";
import './Button.scss'

export const Button = ({name, onClick, className}) => (
  <button className={`${className} button font-button`} onClick={onClick}>
      {name}
  </button>
    
  
);


