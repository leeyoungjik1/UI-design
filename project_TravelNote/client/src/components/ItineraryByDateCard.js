import React, { useState, useEffect } from "react";
import axios from 'axios'
import moment from 'moment'
import { useParams, useNavigate, Link, useSearchParams, useLocation } from 'react-router-dom'
import DestinationBox from "./DestinationBox";


function ItineraryByDateCard({dateOfStart, itineraryByDate}){
    const [totalcost, setTotalcost] = useState(0)
    const [weather, setWeather] = useState()
    const [weatherSearched, setWeatherSearched] = useState()

    const weatherSearchInDestination = (Searched) => {
        // console.log(Searched)
        if(!weatherSearched){
            setWeatherSearched(Searched)
        }
    }
    console.log(itineraryByDate, weather)
    // 일정 총 예상 비용, 숙소 위치 기반 날씨 정보 불러오기
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/itinerarys/bydate/totalcost/${itineraryByDate._id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res) => {
            // console.log(res)
            setTotalcost(res.data.totalcost)
        })
        
        const lat = itineraryByDate.accommodationInfo.location.lat
        const lng = itineraryByDate.accommodationInfo.location.lng
        const APIKey = process.env.REACT_APP_OPENWEATHER_API_KEY

        if(lat){
            // 4일 후 예보까지 밖에 안나옴
            // axios.get(`https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lng}&dt=1716908400&appid=${APIKey}`)
            axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly&units=metric&appid=${APIKey}`)
            .then((res) => {
                // console.log(res)
                setWeather(res.data)
            })
        }
    }, [])

    // 날씨 아이콘 src불러오기
    useEffect(() => {
        if(weather){
            const daySearched = weather.daily.find(day => {
                return moment(day.dt*1000).format('YYYY-MM-DD') === moment(itineraryByDate.date).format('YYYY-MM-DD')
            })
            if(daySearched){
                setWeatherSearched({
                    WeatherIconSrc: `http://openweathermap.org/img/wn/${daySearched.weather[0].icon}@2x.png`,
                    temp: daySearched.temp
                })
            }
        }
    }, [weather])

    // D-day 설정
    const diffDate = moment(itineraryByDate.date).diff(moment(dateOfStart), 'days')

    // console.log(`${diffDate+1}일차 ${weatherSearched}`)
    const {
        accommodationName,
        accommodationAddress,
        accommodationCost,
        accommodationInfo: {photoUrl}
    } = itineraryByDate

    return (
        <div>
            <div>
                <div>
                    <div>
                        <div>{diffDate+1}일차</div>
                        <div>{moment(itineraryByDate.date).format('YYYY-MM-DD')}</div>
                    </div>
                    <div>
                        <div>예상 비용</div>
                        <div>{Number(totalcost).toLocaleString()}원</div>
                    </div>
                </div>
                {weatherSearched &&
                    <div>
                        <img src={weatherSearched.WeatherIconSrc}></img>
                        <div>{Math.round(weatherSearched.temp.min)}°C / {Math.round(weatherSearched.temp.max)}°C</div>
                    </div>
                }
            </div>
            {accommodationName && 
                <div>
                    <div>
                        <div>숙소</div>
                        <div>{accommodationName}</div>
                        <div>{accommodationAddress}</div>
                        <div>숙소비용: {Number(accommodationCost).toLocaleString()}원</div>
                    </div>
                    <img src={photoUrl || "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={accommodationName}></img>
                </div>
            }
            <div>
                {itineraryByDate && itineraryByDate.destinationIds.map((destination, id) => {
                    return (
                        <DestinationBox
                            key={id}
                            destination={destination}
                            index={id}
                            weatherSearch={weatherSearchInDestination}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ItineraryByDateCard