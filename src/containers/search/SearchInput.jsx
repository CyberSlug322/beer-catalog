import React,{ useRef } from "react";
import './SearchInput.scss';

export const SearchInput = ({ onSearch, className }) => {
const inputValue = useRef(null)
    const handleKeyDown = e => {
        if (e.key !== 'Enter' )  return
        onSearch(e.target.value) 
    }

  return (       
        <input
        className={`${className} search-input`}
        type="text"
        placeholder="Search beers…"
        onKeyDown={handleKeyDown}
        /> 
                
  );
}

