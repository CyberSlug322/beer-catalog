import React, { useState } from "react";
import { SearchInput } from "./SearchInput.jsx";
import './SearchBlock.scss';
import { AdvancedFilter } from "../advancedFilter/AdvancedFilter.jsx";

export const SearchBlock = ({onInputChange, onIbuChange, onEbcChange, onAlcVolumeChange, className}) =>{
    const [isFilterActive, setFilterActive] = useState(false);
    const onSearch = (input) => {
        setFilterActive(true);  
        onInputChange(input);
    }

    return (
        <div className={`search-block ${className}`}>
            <SearchInput onSearch={onSearch} className="search-block__search-input"/>
            {isFilterActive &&
            <AdvancedFilter
                onIbuChange={onIbuChange}
                onAlcVolumeChange={onAlcVolumeChange}
                onEbcChange={onEbcChange}
                className="search-block__advanced-filter"
            />}
        </div>
    )
}


