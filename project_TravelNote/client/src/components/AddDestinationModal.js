import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useParams, useNavigate, NavLink, useSearchParams, useLocation } from 'react-router-dom'
import moment from 'moment'
import GoogleMap from "./GoogleMap";

// URL 주소: /itinerary/details/:itineraryId

function AddDestinationModal({selectedDate, itineraryByDateId, changeSubmit}){
    const navigate = useNavigate()

    const [destinationGoogleData, setDestinationGoogleData] = useState({
        name: '',
        formatted_address: '',
        location: {
            lat: '',
            lng: ''
        },
        photoUrl: '',
        place_id: '',
    })

    const [destinations, setDestinations] = useState([])

    // ItineraryByDate 모델에 대한 서버로 전송할 최종 데이터
    const [formData, setFormData] = useState({
        title: '',
        address: '',
        category: '음식점',
        timeOfStart: '',
        timeOfEnd: '',
        description: '',
        cost: '',
        destinationInfo: {}
    })

    // console.log(formData)

    const params = useParams()

    // 구글 지도에서 위치를 선택하였을때 숙소 정보에 대한 데이터 저장
    const getDestinationSearched = (data) => {
        if(data){
            const {name, geometry:{location}, formatted_address, photos, place_id} = data
            setDestinationGoogleData({
                name: name,
                address: formatted_address,
                location: {
                    lat: location.lat(),
                    lng: location.lng()
                },
                photoUrl: photos ? photos[0].getUrl() : '',
                place_id: place_id
            })
        }
    }

    const handleChange = (e) => {
        const { name, value} = e.target 
        setFormData({ ...formData, [name]: value })

        // 시작 시간 < 종료 시간
        if(moment(timeOfEnd).isBefore(moment(timeOfStart))){
            setFormData({ ...formData, timeOfEnd: ''})
            alert('시간 선택 오류')
        }
    }

    // 최종 Destination 모델에 대한 데이터 서버로 전송
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get('http://127.0.0.1:5000/api/users/getId', {
            headers: {
                'Constent-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => {
            axios.post(`http://127.0.0.1:5000/api/itinerarys/destination/create/${itineraryByDateId}`, formData, {
                headers: {
                    'Constent-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then((res) => {
                console.log(res)
                changeSubmit(res)
                // navigate(`/itinerary/details/${params.itineraryId}`)
            }).catch((err) => {
                console.log(err)
            })
        })
    }
    

    // 구글 지도 선택 시 서버로 전송할 데이터 변경
    useEffect(() => {
        setFormData({
            ...formData, 
            title: destinationGoogleData.name,
            address: destinationGoogleData.address,
            destinationInfo: destinationGoogleData
        })
    }, [destinationGoogleData])


    const {
        title,
        address,
        category,
        timeOfStart,
        timeOfEnd,
        description,
        cost
    } = formData 

    return (
        <div>
            <h2>여행지</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">여행지명: </label>
                <input type="text" name="title" id="title" onChange={handleChange} value={title || ''} required/>
                <label htmlFor="address">여행지 주소: </label>
                <input type="text" name="address" id="address" onChange={handleChange} value={address || ''}/>
                <GoogleMap handleChange={getDestinationSearched}/>
                <label htmlFor="category">카테고리: </label>
                <select name="category" id="category" onChange={handleChange} value={category}>
                    <option value="음식점">음식점</option>
                    <option value="관광명소">관광명소</option>
                    <option value="카페">카페</option>
                    <option value="쇼핑센터">쇼핑센터</option>
                    <option value="바">바</option>
                    <option value="기타">기타</option>
                    <option value="미정">미정</option>
                </select>
                <label htmlFor="timeOfStart">일정 시작 시작: </label>
                <input type="datetime-local" name="timeOfStart" id="timeOfStart" required onChange={handleChange} value={timeOfStart} min={moment(selectedDate).startOf("day").format("YYYY-MM-DD HH:mm")} max={moment(selectedDate).endOf("day").format("YYYY-MM-DD HH:mm")}/>
                <label htmlFor="timeOfEnd">일정 종료 시간: </label>
                <input type="datetime-local" name="timeOfEnd" id="timeOfEnd" required onChange={handleChange} value={timeOfEnd} min={moment(selectedDate).startOf("day").format("YYYY-MM-DD HH:mm")} max={moment(selectedDate).endOf("day").format("YYYY-MM-DD HH:mm")}/>
                <label htmlFor="description">여행지 내용: </label>
                <input type="text" name="description" id="description" onChange={handleChange} value={description || ''}/>
                <label htmlFor="cost">예상 비용: </label>
                <input type="number" name="cost" id="cost" onChange={handleChange} value={cost || ''}/>
                <button type="submit">저장</button>
                <button>취소</button>
            </form>
        </div>
    )
}
export default AddDestinationModal