import React, { useState, useEffect, useRef } from "react";
import { searchDebounceTime } from "Constants/constants.js"
import './SliderFilter.scss';


export const SliderFilter = ({title, onInputChange, sliderLimit}) => {
    const ref = useRef('')
    const [sliderValue, setSliderValue] = useState(0)
    const onSliderChange = (e) => setSliderValue(e.target.value)     
    
    useEffect(
         () => {
            ref.current = setTimeout( () => onInputChange(sliderValue), searchDebounceTime )
            return () => clearTimeout(ref.current);
         },[sliderValue])
         
    return (
        <label className="slider-filter">
            <span className="slider-filter__title">{title}</span>
            <span className="slider-filter__slider-value font-bold">{sliderValue}</span>
            <input className="slider-filter__slider" type="range" min="0" max={sliderLimit} step="0.1" onChange={onSliderChange} value={sliderValue}/>
        </label>
    )
    
}