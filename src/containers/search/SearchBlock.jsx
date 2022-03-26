import React from "react";
import { SearchInput } from "./SearchInput.jsx";
import './SearchBlock.scss'

export const SearchBlock = ({onInputChange, className}) =>{

    return (
        <div className={`search-block ${className}`}>
            <SearchInput onSearch={onInputChange} className="search-block__search-input"/>
        </div>
    )
}


