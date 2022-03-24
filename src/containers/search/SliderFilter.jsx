import React from "react";
import { useState } from "react";

export const SliderFilter = ({children}) => {
    const [inputValue, setInputValue] = useState(0);
    return (
    <div>
        {children}
        <input type="range" min="0" max="100" step="0.01" value={inputValue} onChange={e => setInputValue(Math.floor(e.target.value))}></input>
    </div>
    )
    
}