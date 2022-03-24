import React,{ useState } from "react";
import { SearchInput } from "./SearchInput.jsx";
import './Search.scss'
import { SliderFilter } from "./SliderFilter.jsx";


export const Search = ({onInputChange, onIbuChange, onAlcVolumeChange, onEbcChange}) =>{

    return (
        <div className="search-block">
            <SearchInput onSearch={onInputChange}/>
            <SliderFilter changeSerchTerm={onAlcVolumeChange}/>
            <SliderFilter changeSerchTerm={onIbuChange}/>
            <SliderFilter changeSerchTerm={onEbcChange}/>
        </div>
    )
}


