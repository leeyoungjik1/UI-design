import React, { useState, useEffect } from "react";
import axios from 'axios'

// URL 주소: /itinerary/popularitydestination
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

function PopularityDestination(){
    const [list, setList] = useState([])
    console.log(list)

    // 나라별 인기 여행지 리스트 5개씩 가져오기
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/itinerarys/destination/popularity`)
        .then((res) => {
            const result = res.data.destinations.map(destination => {
                const places = destination.place.filter((place, id) => {
                    if(id < 5){
                        return place
                    }
                })
                return (
                    {
                        contry: destination._id,
                        places: places
                    }
                )
            })
            setList(result)
        })
    }, [])
    
    // 구글 placeId를 이용한 여행지 정보 가져오기 테스트
    if(list){
        const test = list[0].places[0].destinationId
        console.log(test)
        if(test){
            axios.get(`https://places.googleapis.com/v1/places/${test}?fields=*&key=${API_KEY}`)
        .then((res) => {
            console.log(res)
        })
        }
    }

    return (
        <div>
            <h1>인기 여행지</h1>
        </div>
    )
}
export default PopularityDestination