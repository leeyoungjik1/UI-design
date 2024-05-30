import React, { useState, useEffect } from "react";
import axios from 'axios'
import SharedItineraryCard from "../../components/SharedItineraryCard";

// URL 주소: /itinerary/shareditinerary

function List(){
    const [list, setList] = useState([])
    console.log(list)

    // 전체 일정 리스트 가져오기
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/itinerarys/sharedlist`)
        .then((res) => setList(res.data.Itinerarys))
    }, [])

    return (
        <div>
            <h1>Shared Itinerary List PAGE</h1>

            {list.length !== 0 && list.map((itinerary, id) => {
                return (
                    <SharedItineraryCard
                        key={id}
                        itinerary={itinerary}
                    />
                )
            })}
        </div>
    )
}
export default List