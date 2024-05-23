import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom'
import API from '../../API'
import moment from 'moment'
import axios from 'axios'
// import DatePicker from "../../components/DatePicker";

// URL 주소: /itinerary/create

function Create(){
    const navigate = useNavigate()

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
            let postData = {...formData, userId: res.data._id}
            if(!title){
                const {userId, city, dateOfStart, dateOfEnd, description, isPublic} = postData
                postData = {userId, city, dateOfStart, dateOfEnd, description, isPublic}
            }
            axios.post('http://127.0.0.1:5000/api/itinerarys/create', postData, {
                headers: {
                    'Constent-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then((res) => {
                setFormData({
                    title: '',
                    city: '',
                    dateOfStart: '',
                    dateOfEnd: '',
                    description: '',
                    isPublic: true
                })
                navigate("/itinerary/changelist")
            }).catch((err) => {
                console.log(err)
            })
        })
    }

    const {
        title,
        city,
        dateOfStart,
        dateOfEnd,
        description,
    } = formData 

    return (
        <div>
            <h1>Itinerary Create PAGE</h1>
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
                <input type="radio" name="isPublic" id="isPublic" onChange={handleChange} defaultChecked value={true}/>공개
                <input type="radio" name="isPublic" id="isPublic" onChange={handleChange} value={false}/>비공개
                {/* <DatePicker handleDateChange={handleDateChange} startDate={startDate}/> */}
                <button type="submit">일정 저장</button>
            </form>
        </div>
    )
}

export default Create