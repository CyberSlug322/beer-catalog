import React from "react";

export const SearchInput = ({ onSearch }) => {
    
    const handleKeyDown = e => {
        if (e.key !== 'Enter' )  return
        onSearch([e.key, e.target.value]) 
    }

  return (
    <div className="SearchInput">      
        <input
        type="text"
        placeholder="type and press enter to search"
        onKeyDown={handleKeyDown}
        />          
    </div>
  );
}

