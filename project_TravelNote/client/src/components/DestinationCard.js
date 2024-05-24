import React, { useState, useEffect } from "react";
import moment from 'moment'
import './DestinationCard.css'
import ModDestinationCard from "./ModDestinationCard";

function DestinationCard({title, address, category, timeOfStart, timeOfEnd, description, cost, isDone, imgSrc, modDestinationCards, destinationId, changeSubmit, handleClick, children}){
    const findDestinationId = modDestinationCards.find(modDestinationCard => modDestinationCard === destinationId)

    return (
        <div>
            <div>{isDone ? "완료" : "예정"}</div>
            <img src={imgSrc}></img>
            <div>{title}</div>
            <div>{address}</div>
            <div>{category}</div>
            <div>
                <div>
                    <div>{`${moment(timeOfStart).format('HH:mm')}`}</div>
                </div>
                <div>~</div>
                <div>
                    <div>{`${moment(timeOfEnd).format('HH:mm')}`}</div>
                </div>
            </div>
            <div>{description}</div>
            <div>예상 금액: {cost}원</div>
            <div onClick={handleClick}>
                {children}
            </div>
            <ModDestinationCard 
                // selectedDate={itineraryByDate.date}
                destinationId={destinationId}
                // changeSubmit={changeSubmitServer}
                changeSubmit={changeSubmit}
                isShow={findDestinationId ? true : false}
            />
        </div>
    )
}

export default DestinationCard