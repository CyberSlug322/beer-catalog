import React from "react";
import './SearchInput.scss';

export const SearchInput = ({ onSearch, className }) => {
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

