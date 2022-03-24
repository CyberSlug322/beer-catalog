import React from "react";
import { useRef } from 'react'

export const SearchInput = ({ onSearch}) => {
  const reference = useRef('')
    
    const handleKeyDown = e => {
        if (e.key !== 'Enter' )  return
        onSearch(e.target.value) 
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

