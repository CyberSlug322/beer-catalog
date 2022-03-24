import React,{ useState } from "react";
import { SearchInput } from "./SearchInput.jsx";
import './Search.scss'
import { AdvancedFilter } from "./AdvancedFilter.jsx";

export const Search = ({onInputChange, onIbuChange, onAlcVolumeChange, onEbcChange, isFilterHidden}) =>{

    return (
        <div className="search-block">
            <SearchInput onSearch={onInputChange} className="search-block__search-input"/>
            {!isFilterHidden && <AdvancedFilter onIbuChange={onIbuChange} onAlcVolumeChange={onAlcVolumeChange} onEbcChange={onEbcChange}/>}
        </div>
    )
}


