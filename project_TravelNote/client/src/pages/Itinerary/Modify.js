import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from 'react-router-dom'
import API from '../../API'
import moment from 'moment'
import axios from 'axios'

// URL 주소: /itinerary/modify/:itineraryId

function Modify(){
    const navigate = useNavigate()
    const params = useParams()

    const [formData, setFormData] = useState({
        title: '',
        city: '',
        dateOfStart: '',
        dateOfEnd: '',
        description: '',
        isPublic: true
    })

    const handleChange = (e) => {
        const { name, value} = e.target 
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get('http://127.0.0.1:5000/api/users/getId', {
            headers: {
                'Constent-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => {
            axios.put(`http://127.0.0.1:5000/api/itinerarys/changelist/${params.itineraryId}`, formData, {
                headers: {
                    'Constent-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then((res) => {
                navigate(`/itinerary/details/${params.itineraryId}`)
            }).catch((err) => {
                console.log(err)
            })
        })
    }

    useEffect(() => {
        if(params.itineraryId){
            axios.get(`http://127.0.0.1:5000/api/itinerarys/details/${params.itineraryId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((res) => {
                // console.log(res.data)
                const {title, city, dateOfStart, dateOfEnd, description, isPublic} = res.data
                setFormData({
                    title, 
                    city, 
                    dateOfStart: moment(dateOfStart).format('YYYY-MM-DD'), 
                    dateOfEnd: moment(dateOfEnd).format('YYYY-MM-DD'), 
                    description, 
                    isPublic
                })
            })
        }
    }, [])

    const {
        title,
        city,
        dateOfStart,
        dateOfEnd,
        description,
    } = formData 

    return (
        <div>
            <h1>Itinerary Modify PAGE</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">일정명: </label>
                <input type="text" name="title" id="title" onChange={handleChange} value={title}/>
                <label htmlFor="city">대표도시명: </label>
                <input type="text" name="city" id="city" onChange={handleChange} value={city}/>
                <label htmlFor="dateOfStart">일정 시작일: </label>
                <input type="date" name="dateOfStart" id="dateOfStart" required onChange={handleChange} value={dateOfStart} max={dateOfEnd}/>
                <label htmlFor="dateOfEnd">일정 종료일: </label>
                <input type="date" name="dateOfEnd" id="dateOfEnd" required onChange={handleChange} value={dateOfEnd} min={dateOfStart}/>
                <label htmlFor="description">여행 내용: </label>
                <input type="text" name="description" id="description" onChange={handleChange} value={description}/>
                <label htmlFor="isPublic">공개 여부: </label>
                <input type="radio" name="isPublic" id="isPublic" onChange={handleChange} value={true}/>공개
                <input type="radio" name="isPublic" id="isPublic" onChange={handleChange} value={false}/>비공개
                <button type="submit">일정 저장</button>
            </form>
        </div>
    )
}

export default Modify