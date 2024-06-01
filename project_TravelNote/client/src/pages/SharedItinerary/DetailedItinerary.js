import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link, useSearchParams, useLocation } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import ItineraryByDateButton from '../../components/ItineraryByDateButton'
import ItineraryByDateCard from '../../components/ItineraryByDateCard'
import GoogleDirectionsMap from "../../components/GoogleDirectionsMap";

// URL 주소: /itinerary/shareditinerary/:itineraryId

function DetailedItinerary(){
    const params = useParams()

    const [itinerary, setItinerary] = useState([])
    const [itineraryFixed, setItineraryFixed] = useState([])
    const [day, setDay] = useState('')
    // console.log(itinerary)

    // 일차별 버튼 선택(1일차, 2일차 ...)
    const changeDay = (e) => {
        // console.dir(e.target)
        setDay(e.target.id)
    }

    // 전체 일정 버튼 선택
    const showAllItinerary = (e) => {
        setDay('')
    }

    // url 파라미터를 이용하여 선택된 일정 데이터 가져오기
    useEffect(() => {
        if(params.itineraryId){
            axios.get(`http://127.0.0.1:5000/api/itinerarys/details/${params.itineraryId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((res) => {
                setItinerary(res.data)
                setItineraryFixed(res.data)
            })
        }
    }, [])

    // 일차 버튼 클릭 시 선택된 일정 데이터 가져오기
    useEffect(() => {
        if(params.itineraryId && day){
            axios.get(`http://127.0.0.1:5000/api/itinerarys/details/ItineraryByDate/${params.itineraryId}/${day}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((res) => setItinerary(res.data))
        }else{
            axios.get(`http://127.0.0.1:5000/api/itinerarys/details/${params.itineraryId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((res) => {
                setItinerary(res.data)
                setItineraryFixed(res.data)
            })
        }
    }, [day])

    return (
        <div>
            <h1>Shared Detailed Itinerary PAGE</h1>
            <div>
                <div>
                    <button onClick={showAllItinerary}>전체일정</button>
                    {itineraryFixed.length !== 0 && 
                        itineraryFixed.itineraryByDateIds.map((itineraryByDate, id) => {
                            return (
                                <ItineraryByDateButton 
                                    key={id}
                                    dateOfStart={itinerary.dateOfStart}
                                    itineraryByDate={itineraryByDate}
                                    handelClick={changeDay}
                                />
                            )
                        })
                    }
                </div>
                <div>
                    <div>
                        <div>
                            <div>{itinerary.title}</div>
                            <div>{moment(itinerary.dateOfStart).format('YYYY-MM-DD')} ~ {moment(itinerary.dateOfEnd).format('YYYY-MM-DD')}</div>
                        </div>
                        <div>총 예상 비용: {itinerary.lenght !== 0 ? Number(itinerary.totalcost).toLocaleString() : 0}원</div>
                    </div>
                    <div>
                        <div>
                            {itinerary.length !== 0 && 
                                itinerary.itineraryByDateIds.map((itineraryByDate, id) => {
                                    return (
                                        <ItineraryByDateCard 
                                            key={id}
                                            dateOfStart={itinerary.dateOfStart}
                                            itineraryByDate={itineraryByDate}
                                            handelClick={changeDay}
                                            isShared={true}
                                        />
                                    )
                                })
                            }
                        </div>
                        {day && 
                            <div><GoogleDirectionsMap itinerary={itinerary}/></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetailedItinerary