import React from "react";
import Infomation from "../Information";
import AboutInfo from "../component/AboutInfo";
import './About.css'

function About(){
    return (
        <div className="about-container">
            <img src="https://images.squarespace-cdn.com/content/v1/5d5e6a57e7a27b0001395f6e/1572256947996-P1OBBDUDXL94R021X61I/IMG_7460_BW.jpg?format=1000w"></img>
            <div className="info-box">
                <p>Lars Tornøe is a Norwegian design studio devoted to furniture design and related fields of product design, working with various clients in Europe and US.<br/>
                <br/>Tornøe’s work has received several awards such as the DogA award, Red Dot Award and Designer of The Year by Bo Bedre Magazine.</p>
                <AboutInfo info={Infomation}/>
            </div>
        </div>
    )
}
export default About