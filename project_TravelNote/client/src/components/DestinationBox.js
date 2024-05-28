import React, { useState, useEffect } from "react";
import axios from 'axios'
import moment from 'moment'
import { useParams, useNavigate, Link, useSearchParams, useLocation } from 'react-router-dom'


function DestinationBox({destination, index, weatherSearch}){
    const [weather, setWeather] = useState()
    const [weatherSearched, setWeatherSearched] = useState()

    // console.log(weather)
    // console.log(weatherSearched)
    // console.log(`${moment(destination.timeOfStart).format('MM-DD')} ${weather}`)

    // 위치 기반 날씨 정보 불러오기
    useEffect(() => {
        const lat = destination.destinationInfo.location.lat
        const lng = destination.destinationInfo.location.lng
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
                return moment(day.dt*1000).format('YYYY-MM-DD') === moment(timeOfStart).format('YYYY-MM-DD')
            })
            if(daySearched){
                setWeatherSearched({
                    WeatherIconSrc: `http://openweathermap.org/img/wn/${daySearched.weather[0].icon}@2x.png`,
                    temp: daySearched.temp
                })
                weatherSearch({
                    WeatherIconSrc: `http://openweathermap.org/img/wn/${daySearched.weather[0].icon}@2x.png`,
                    temp: daySearched.temp
                })
            }
        }
    }, [weather])

    const {
        timeOfStart,
        timeOfEnd,
        isDone,
        category,
        title,
        address,
        description,
        destinationInfo: {photoUrl},
        cost
    } = destination
    return (
        <div>
            <div>{index+1}</div>
            <div>
                <div>
                    <div>{moment(timeOfStart).format('HH:mm')} ~ {moment(timeOfEnd).format('HH:mm')}</div>
                    {weatherSearched &&
                        <div>
                            <img src={weatherSearched.WeatherIconSrc}></img>
                            <div>{Math.round(weatherSearched.temp.min)}°C / {Math.round(weatherSearched.temp.max)}°C</div>
                        </div>
                    }
                    <button>{isDone ? '완료' : '예정'}</button>
                </div>
                <div>
                    <div>
                        <div>{category}</div>
                        <div>{title}</div>
                        <div>{address}</div>
                        <div>{description}</div>
                        <div>예상 비용: {Number(cost).toLocaleString()}원</div>
                    </div>
                    <img src={photoUrl || "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={title}></img>
                </div>
            </div>
        </div>
    )
}

export default DestinationBox