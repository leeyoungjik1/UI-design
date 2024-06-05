import React, { useState, useEffect } from "react";
import axios from 'axios'
import moment from 'moment'
import styles from './DestinationCard.module.css'
import ModDestinationCard from "./ModDestinationCard";

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

function DestinationCard({title, address, category, timeOfStart, timeOfEnd, description, cost, isDone, modDestinationCards, placeId, destinationId, changeSubmit, handleClick, children}){
    const findDestinationId = modDestinationCards.find(modDestinationCard => modDestinationCard === destinationId)
    const [imgSrc, setImgSrc] = useState()

    useEffect(() => {
        if(placeId){
            axios.get(`https://places.googleapis.com/v1/places/${placeId}?fields=photos&key=${API_KEY}`)
            .then((res) => {
                const {photos} = res.data
                setImgSrc(photos && photos.length !== 0 &&
                            `https://places.googleapis.com/v1/${photos[0].name}/media?maxHeightPx=300&maxWidthPx=300&key=${API_KEY}`
                        )
            })
        }else{
            setImgSrc("https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
        }

        return () => {
            setImgSrc()
        }
    }, [placeId])

    return (
        <div className={styles.destinationCardContainer}>
            <div>{isDone ? "완료" : "예정"}</div>
            <div className={styles.destinationCardMain}>
                <img src={imgSrc}></img>
                <div>
                    <div>{category}</div>
                    <div>
                        {moment(timeOfStart).format('HH:mm')} ~ {moment(timeOfEnd).format('HH:mm')}
                    </div>
                    <div>{title}</div>
                    <div>{address}</div>
                    <div>{description}</div>
                    <div>예상 금액: {cost}원</div>
                </div>
            </div>
            <div className={styles.destinationCardBtns} onClick={handleClick}>
                {children}
            </div>
            <ModDestinationCard 
                destinationId={destinationId}
                changeSubmit={changeSubmit}
                isShow={findDestinationId ? true : false}
            />
        </div>
    )
}

export default DestinationCard