import React from "react";
import './Card.css'

function Card({children, handleHover, handleClick, variant, sx}){
    return (
        <div className={`Card-container ${variant}`} onClick={handleClick} onMouseEnter={handleHover} style={sx}>
            <div className="Card-contents">
                {children}
            </div>
        </div>
    )
}
export default Card

Card.defaultProps = {
    children: "",
    handleHover: () => console.log('마우스 호버'),
    handleClick: () => console.log('마우스 클릭')
}