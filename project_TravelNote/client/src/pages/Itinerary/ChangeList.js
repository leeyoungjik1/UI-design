import React, { useState, useEffect } from "react";
import axios from 'axios'
import ItineraryCard from "../../components/ItineraryCard";


function changeItinerary(e){
    console.dir(e.target)
}

function ChangeList(){
    const [list, setList] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/itinerarys/changelist', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res) => setList(res.data.Itinerarys))
    }, [])
    console.log(list)
    return (
        <div>
            <h1>Itinerary Change List PAGE</h1>
            {list.map((itinerary, id) => {
                return (
                    <ItineraryCard
                        key={id}
                        city={itinerary.city}
                        dateOfEnd={itinerary.dateOfEnd}
                        dateOfStart={itinerary.dateOfStart}
                        description={itinerary.description}
                        title={itinerary.title}
                        status={itinerary.status}
                        open={itinerary.open}
                        handleClick={changeItinerary}
                    >
                        <button id={itinerary._id}>수정</button>
                        <button id={itinerary._id}>삭제</button>
                        <button id={itinerary._id}>완료</button>
                    </ItineraryCard>
                )
            })}
        </div>
    )
}
export default ChangeList