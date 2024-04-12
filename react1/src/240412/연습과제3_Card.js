import React from "react";
import dummyData2 from "./연습과제3_dummyData2";
import './연습과제3_Card.css'

function Card({word, meaning}){
    return (
        <div className='card-container'>
            <h1>{word}</h1>
            <h2>{meaning}</h2>
        </div>
    )
}
export default Card