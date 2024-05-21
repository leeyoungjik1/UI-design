import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useParams, NavLink, useSearchParams, useLocation } from 'react-router-dom'
import ItineraryCard from "../../components/ItineraryCard";
import moment from 'moment'
import GoogleMap from "../../components/GoogleMap";

function changeItinerary(e){
    console.dir(e.target)
}



function DetailedItinerary(){
    const [itinerary, setItinerary] = useState([])
    const [day, setDay] = useState({
        date: '', 
        diffDate: '', 
        message: '일자를 선택하세요.'
    })
    const [itineraryByDate, setItineraryByDate] = useState()
    const [destinations, setDestinations] = useState([])

    console.log(itinerary)
    console.log(itineraryByDate)
    const params = useParams()


    function selecteDate(e){
        const diffDate = moment(e.target.value).diff(moment(itinerary.dateOfStart), 'days')

        setDay({
            date: e.target.value, 
            diffDate: `${diffDate+1}일차`, 
            message: `${diffDate+1}일차 ${e.target.value}`
        })
    }

    useEffect(() => {
        if(params.itineraryId){
            axios.get(`http://127.0.0.1:5000/api/itinerarys/details/${params.itineraryId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((res) => setItinerary(res.data))
        }
    }, [])

    useEffect(() => {
        if(day.date){
            const itineraryByDate = itinerary.itineraryByDateId.find(itineraryByDate => {
                return itineraryByDate.day === day.diffDate
            })
            setItineraryByDate(itineraryByDate)
        }
    }, [day])

    return (
        <div>
            <h1>Detailed Itinerary PAGE</h1>
            <div>
                <div>
                    <ItineraryCard
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
                    </ItineraryCard>
                    <div>
                        <label htmlFor="date">날짜 선택: </label>
                        <input type="date" name="date" id="date" onChange={selecteDate} min={moment(itinerary.dateOfStart).format("YYYY-MM-DD")} max={moment(itinerary.dateOfEnd).format("YYYY-MM-DD")}/>
                    </div>
                </div>
                <div>
                    {day.message}
                </div>
                {itineraryByDate && 
                    <div>
                        <h2>숙소</h2>
                        <label htmlFor="accommodation">숙소명: </label>
                        <input type="text" name="accommodation" id="accommodation" defaultValue={itineraryByDate.accommodationName}/>
                        <label htmlFor="accommodationCost">숙박 비용: </label>
                        <input type="number" name="accommodationCost" id="accommodationCost" defaultValue={itineraryByDate.accommodationCost}/>
                        <GoogleMap/>
                    </div> 
                }
            </div>
        </div>
    )
}
export default DetailedItinerary