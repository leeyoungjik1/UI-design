import React from "react";
import MainMenu from "./MainMenu";
import './GNB.css'
import { Link } from 'react-router-dom'

const menus = [
    {title: "Work", url: "/"},    
    {title: "About", url: "/about"}
]

function GNB(){
    return (
        <div className="gnb">
            <Link className="main-logo" to='/'><img src="https://images.squarespace-cdn.com/content/v1/5d5e6a57e7a27b0001395f6e/1571229408517-A579ORG2WLX7B5W6UIL2/LARS_LOGO.png?format=1500w"></img></Link>
            <MainMenu menus={menus}/>
        </div>
    )
}
export default GNB