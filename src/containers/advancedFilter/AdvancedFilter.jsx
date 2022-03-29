import React from "react";
import { SliderFilter } from "./SliderFilter.jsx";
import './AdvancedFilter.scss'

export const AdvancedFilter = ({ onIbuChange, onAlcVolumeChange, onEbcChange}) => {

    return (
        <div className="advanced-filter">
            <label className="font-bold advanced-filter__title">Filter results</label>
            <SliderFilter onInputChange={onAlcVolumeChange} sliderLimit={54} title="Alcohol by volume"></SliderFilter>
            <SliderFilter onInputChange={onIbuChange} sliderLimit={100} title="International Bitterness Units"></SliderFilter>
            <SliderFilter onInputChange={onEbcChange} sliderLimit={100} title="Color by EBC"></SliderFilter>
        </div>
    )
}