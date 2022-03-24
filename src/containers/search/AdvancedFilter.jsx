import React from "react";
import { SliderFilter } from "./SliderFilter.jsx";
import './AdvancedFilter.scss'

export const AdvancedFilter = ({ onIbuChange, onAlcVolumeChange, onEbcChange}) => {

    return (
        <div className="advanced_filter">
            <label className="font-bold">Filter results</label>
            <SliderFilter changeSerchTerm={onAlcVolumeChange}>Alcohol by volume</SliderFilter>
            <SliderFilter changeSerchTerm={onIbuChange}>International Bitterness Units</SliderFilter>
            <SliderFilter changeSerchTerm={onEbcChange}>Color by EBC</SliderFilter>
        </div>
    )
}