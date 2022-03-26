import React, { useState } from "react";
import { CustomInput } from "../../components/customInput/CustomInput.jsx";
import './SearchInput.scss';

export const SearchInput = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('')
  const handleKeyDown = (e) => {
      if (e.key !== 'Enter' )  return
      onSearch(inputValue) 
  }
  const handleInputChange = (e) => setInputValue(e.target.value)

  return (    
    <div className="search-input"> 
        <CustomInput
          placeholder="Search beers…"
          className="search-input__custom-input"
          onChange={handleInputChange}
          handleKeyDown={handleKeyDown}
          inputValue={inputValue}
          />
        <img src="../../img/search-icon.svg" onClick={() => onSearch(inputValue)}/>
            
        
    </div>  
                
  );
}

