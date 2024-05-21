import React from 'react'
import moment from 'moment'

function ItineraryCard({city, dateOfEnd, dateOfStart, description, title, status, open, handleClick, children}){
    return (
        <div>
            <div>{open}</div>
            <div>{status}</div>
            <img></img>
            <div>{title}</div>
            <div>{city}</div>
            <div>
                <div>
                    <div>시작일</div>
                    <div>{`${moment(dateOfStart).format('YY.MM.DD')}`}</div>
                </div>
                <div>~</div>
                <div>
                    <div>종료일</div>
                    <div>{`${moment(dateOfEnd).format('YY.MM.DD')}`}</div>
                </div>
            </div>
            <div>설명: {description}</div>
            <div onClick={handleClick}>
                {children}
            </div>
        </div>
    )
}

export default ItineraryCard