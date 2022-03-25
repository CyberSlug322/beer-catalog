import React from "react";
import { SearchInput } from "./SearchInput.jsx";
import './Search.scss'

export const Search = ({onInputChange}) =>{

    return (
        <div className="search-block">
            <SearchInput onSearch={onInputChange} className="search-block__search-input"/>
        </div>
    )
}


