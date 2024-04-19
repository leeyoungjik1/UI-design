import React from "react";
import './CardImg.css'
import { Link } from 'react-router-dom'

function CardImg({imgSrc, imgTitle}){
    let imgBackground = null
    const showBackground = (e) => {
        if(e.target.nextSibling && e.target.nextSibling.className.includes('img-background')){
            imgBackground = e.target.nextSibling
            imgBackground.classList.add('show')
        } 
    }
    const hideBackground = () => {
        if(imgBackground){
            imgBackground.classList.remove('show')
        }
    }
    console.log(imgTitle.split(' ')[0]+imgTitle.split(' ')[1]+imgTitle.split(' ')[2])
    return (
        <Link onMouseEnter={showBackground} onMouseLeave={hideBackground} to={`/productdetails/`}>
            <img src={imgSrc} ></img>
            <div className="img-background">
                <h2>{imgTitle}</h2>
            </div>
        </Link>

    )
}
export default CardImg