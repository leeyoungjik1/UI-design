import React from 'react'

function DestinationCard({title, address, category, timeOfStart, timeOfEnd, description, cost, status, handleClick, children}){
    return (
        <div>
            <div>{status}</div>
            <img></img>
            <div>{title}</div>
            <div>{address}</div>
            <div>{category}</div>
            <div>
                <div>
                    <div>{timeOfStart}</div>
                </div>
                <div>~</div>
                <div>
                    <div>{timeOfEnd}</div>
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