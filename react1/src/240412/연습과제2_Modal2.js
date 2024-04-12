import React from "react";
import './연습과제2_Modal.css'

function Modal2({open, children}){
    return <div className={`Modal ${open ? "open" : "close"}`}>{children}</div>
}
export default Modal2

Modal2.defaultProps = {
    open: false
}

