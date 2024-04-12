import React from "react";
import './연습과제4_Input.css'

function Input({size, color, label, width, handleChange, disabled, placeholder}){
    return(
        <div>
            <label className={`input ${color} ${width}`}>{label}<input className={`input ${size} ${color}`} type='text' placeholder={placeholder} onClick={handleChange} disabled={disabled && 'block'}></input></label>
        </div>
    )
}
export default Input