import React from "react";
import './CustomInput.scss'

export const CustomInput = ({placeholder, className, onChange, inputValue, handleKeyDown}) => {
    return (
        <input 
        className={`custom-input ${className}`}
        type="text"
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        value={inputValue}
        onChange={onChange}
        /> 
    )
}