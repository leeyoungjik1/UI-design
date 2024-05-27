import React, { useState, useEffect } from "react";
import axios from 'axios'
import moment from 'moment'


function MyItineraryCard({itinerary}){
    console.log(itinerary)
    const [totalcost, setTotalcost] = useState(0)

    // 해당 일정 이미지 불러오기
    let imgSrc = ''
    if(itinerary.length !== 0){
        const imgSrcSearched1 = itinerary.itineraryByDateIds.map(itineraryByDateId => {
            // console.log(itineraryByDateId)
            return (
                itineraryByDateId.destinationIds.map(destinationId => {
                    // console.log(destinationId)
                    return destinationId.destinationInfo.photoUrl
                })
            )
        })
        const imgSrcSearched2 = imgSrcSearched1.find(res => {
            return res.length !== 0 && res[0] !== ''
        })
        if(imgSrcSearched2){
            imgSrc = imgSrcSearched2.find(res => {
                return res
            })
        }else{
            imgSrc = "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    }

    // 일정 총 예상 비용 불러오기
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/itinerarys/totalcost?itineraryId=${itinerary._id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res) => {
            console.log(res)
            setTotalcost(res.data.totalcost)
        })
    }, [])

    // D-day 설정
    const diffDate = moment().startOf('day').diff(moment(itinerary.dateOfStart), 'days')

    const {open, status, title, city, dateOfStart, dateOfEnd, description} = itinerary
    return (
        <div>
            <div>
                <div>{open}</div>
                <button>{status}</button>
            </div>
            <div>
                <img src={imgSrc}></img>
                <div>
                    <div>
                        <div>D{diffDate === 0 ? '-day' : diffDate > 0 ? '+' + diffDate : diffDate}</div>
                        <div>{title}</div>
                        <div>공유하기 아이콘</div>
                    </div>
                    <div>{city}</div>
                    <div>{moment(dateOfStart).format('YYYY-MM-DD')} ~ {moment(dateOfEnd).format('YYYY-MM-DD')}</div>
                    <div>예상 비용: {totalcost.toLocaleString()}원</div>
                    <div>{description}</div>
                </div>
            </div>
        </div>
    )
}

export default MyItineraryCard