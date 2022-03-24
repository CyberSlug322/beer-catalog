import React,{useState} from "react";
import { SearchInput } from "./SearchInput.jsx";
import './Search.scss'
import { SliderFilter } from "./SliderFilter.jsx";


export const Search = () =>{
const [searchParams, setSearchParams] = useState({
    alcoholVolume: 0,
    IBU: 0,
    EBC: 0
})



    return (
        <div className="search">
            <SearchInput/>
            Filter results
            <SliderFilter>Alcohol by volume</SliderFilter>
            <SliderFilter>International bitterness units</SliderFilter>
            <SliderFilter>Color by EBC</SliderFilter>
        </div>
    )}

const onSearchHandler = (value) => {
    setSearchTerm(value)
    console.log("search happend")
}