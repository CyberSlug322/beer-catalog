import React from "react";

export const SearchInput = ({ onSearch }) => {

    const handleKeyDown = e => {
        if (e.key !== 'Enter' )  return
        onSearch(e.target.value) 
    }

  return (
    <div className="search-input">      
        <input
        type="text"
        placeholder="Search beers…"
        onKeyDown={handleKeyDown}
        />          
    </div>
  );
}

