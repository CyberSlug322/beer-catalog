import React from "react";
import './SliderFilter.scss'

export const SliderFilter = ({children, changeSerchTerm}) => {
    let timeoutId
    const onChange = (e) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout( () => {
            changeSerchTerm(Math.floor(e.target.value))
        }
        , 500)
    }
    return (
    <div className="slider-filter">
        {children}
        <input className="sliderFilter__slider" type="range" min="0" max="100" step="0.01" onChange={onChange}></input>
    </div>
    )
    
}