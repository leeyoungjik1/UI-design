import React from 'react'
import moment from 'moment'
import './DestinationCard.css'

function DestinationCard({title, address, category, timeOfStart, timeOfEnd, description, cost, isDone, imgSrc, handleClick, children}){
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
        </div>
    )
}

export default DestinationCard