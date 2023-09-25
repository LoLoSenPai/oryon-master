import React from 'react'
import leftArrow from './icons/left-arrow.svg'
import rightArrow from './icons/right-arrow.svg'

export default function BtnSlider({direction, moveSlide}) {

    const buttonStyle = {
        backgroundColor: "transparent",
        borderColor: "#02ffa7",
    };
    const arrowStyle = {
        // strokeWidth: "2px",
    };

    return (
        <button 
        onClick={moveSlide}
        style={buttonStyle}
        className={direction === "next" ? "btn-slide next": "btn-slide prev"}>
            <img 
                src={direction === "next" ? rightArrow : leftArrow} 
                alt="icone flèche"
                style={arrowStyle}/>
        </button>
    )
}
