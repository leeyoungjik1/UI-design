import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useParams, useNavigate, NavLink, useSearchParams, useLocation } from 'react-router-dom'
import ItineraryCard from "../../components/ItineraryCard";
import DestinationCard from "../../components/DestinationCard";
import AddDestinationModal from "../../components/AddDestinationModal";
import moment from 'moment'
import GoogleMap from "../../components/GoogleMap";

// URL 주소: /itinerary/details ,/itinerary/details/:itineraryId


function changeItinerary(e){
    console.dir(e.target)
}




function DetailedItinerary(){
    const navigate = useNavigate()



    // 해당 사용자의 선택된 일정
    const [itinerary, setItinerary] = useState([])

    // 하나의 일정 중 선택한 일자 : 1일차, 2일차...
    const [day, setDay] = useState({
        date: '', 
        dayOfDate: '', 
        message: '일자를 선택하세요.'
    })
    
    // 날짜선택 여부
    const [selectDay, setSelectDay] = useState(null)

    // 서버 전송 여부
    const [submitServer, setSubmitServer] = useState(null)

    // 선택한 일차에 대한 데이터
    const [itineraryByDate, setItineraryByDate] = useState()
    const [accommodationGoogleData, setAccommodationGoogleData] = useState({
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
        day: '',
        date: '',
        accommodationName: '',
        accommodationAddress: '',
        accommodationCost: null,
        accommodationInfo: {}
    })

    console.log(itinerary)
    console.log(itineraryByDate)
    // console.log(accommodationGoogleData)
    // console.log(day)
    // console.log(formData)

    const params = useParams()

    // 전체 일정 중 달력에서 날짜를 선택
    const selectDayeDate = (e) => {
        const diffDate = moment(e.target.value).diff(moment(itinerary.dateOfStart), 'days')

        setDay({
            date: e.target.value, 
            dayOfDate: `${diffDate+1}일차`, 
            message: `${diffDate+1}일차 ${e.target.value}`
        })
    }

    // 구글 지도에서 위치를 선택하였을때 숙소 정보에 대한 데이터 저장
    const getAccommodationSearched = (data) => {
        if(data){
            const {name, geometry:{location}, formatted_address, photos, place_id} = data
            setAccommodationGoogleData({
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
    }

    // 달력에서 날짜를 선택하면 선택된 날짜정보만 ItineraryByDate 모델에 대한 데이터 서버로 전송
    function initSubmit(){
        axios.get('http://127.0.0.1:5000/api/users/getId', {
            headers: {
                'Constent-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => {
            axios.post(`http://127.0.0.1:5000/api/itinerarys/bydate/create/${params.itineraryId}`, formData, {
                headers: {
                    'Constent-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then((res) => {
                console.log(res)
                setSubmitServer(res)
                setItineraryByDate(res.data.newItineraryByDate)
                // navigate(`/itinerary/details/${params.itineraryId}`)
            }).catch((err) => {
                console.log(err)
            })
        })
    }

    // 최종 ItineraryByDate 모델에 대한 데이터 서버로 전송
    function handleSubmit(e){
        e.preventDefault()
        axios.get('http://127.0.0.1:5000/api/users/getId', {
            headers: {
                'Constent-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => {
            axios.put(`http://127.0.0.1:5000/api/itinerarys/bydate/${itineraryByDate._id}`, formData, {
                headers: {
                    'Constent-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then((res) => {
                console.log(res)
                setSubmitServer(res)
                setItineraryByDate(res.data.updateditineraryByDate)
                // navigate(`/itinerary/details/${params.itineraryId}`)
            }).catch((err) => {
                console.log(err)
            })
        })
    }

    // AddDestinationModal에서 서버 전송 시 setSubmitServer
    const changeSubmitServer = (res) => {
        setSubmitServer(res)
    }

    const changeDestination = (e) => {
        console.dir(e.target)
    }
    
    // url 파라미터를 이용하여 선택된 일정 데이터 가져오기
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

    // 서버로 데이터 전송이 완료된 이후 데이터 갱신
    useEffect(() => {
        if(params.itineraryId){
            axios.get(`http://127.0.0.1:5000/api/itinerarys/details/${params.itineraryId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((res) => {
                const itineraryByDateSearched = res.data.itineraryByDateIds.find(itineraryByDate => {
                    return itineraryByDate.day === day.dayOfDate
                })
                setItinerary(res.data)
                setItineraryByDate(itineraryByDateSearched)
            })
        }
    }, [submitServer])


    // 달력에서 날짜를 선택하면 선택된 날짜의 일차 데이터 변경 저장
    useEffect(() => {
        if(day.date){
            const itineraryByDateSearched = itinerary.itineraryByDateIds.find(itineraryByDate => {
                return itineraryByDate.day === day.dayOfDate
            })
            // console.log(itineraryByDateSearched)
            if(itineraryByDateSearched){
                setFormData({
                    ...formData,
                    day: itineraryByDateSearched.day,
                    date: itineraryByDateSearched.date,
                    accommodationName: itineraryByDateSearched.accommodationName,
                    accommodationAddress: itineraryByDateSearched.accommodationAddress,
                    accommodationCost: itineraryByDateSearched.accommodationCost
                })
            }else{
                setFormData({
                    ...formData,
                    day: day.dayOfDate,
                    date: day.date,
                    accommodationName: '',
                    accommodationAddress: '',
                    accommodationCost: null
                })
            }
        }
        setSelectDay(day.dayOfDate)
    }, [day])

    
    // 달력에서 날짜를 선택하면 선택된 날짜정보만 ItineraryByDate 모델에 대한 데이터 서버로 전송
    useEffect(() => {
        if(day.date){
            const itineraryByDateSearched = itinerary.itineraryByDateIds.find(itineraryByDate => {
                return itineraryByDate.day === day.dayOfDate
            })
            if(itineraryByDateSearched){
                setItineraryByDate(itineraryByDateSearched)
            }else{
                initSubmit()
                setItineraryByDate()
            }
        }
    }, [selectDay])

    // 구글 지도 선택 시 서버로 전송할 데이터 변경
    useEffect(() => {
        setFormData({
            ...formData, 
            accommodationName: accommodationGoogleData.name,
            accommodationAddress: accommodationGoogleData.address,
            accommodationInfo: accommodationGoogleData
        })
    }, [accommodationGoogleData])


    const {
        accommodationName,
        accommodationAddress,
        accommodationCost
    } = formData 
    
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
                        <input type="date" name="date" id="date" onChange={selectDayeDate} min={moment(itinerary.dateOfStart).format("YYYY-MM-DD")} max={moment(itinerary.dateOfEnd).format("YYYY-MM-DD")}/>
                    </div>
                </div>
                <div>
                    {day.message}
                </div>
                {day.date &&
                    <div>
                        <div>
                            <h2>숙소</h2>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="accommodationName">숙소명: </label>
                                <input type="text" name="accommodationName" id="accommodationName" onChange={handleChange} value={accommodationName || ''} required/>
                                <label htmlFor="accommodationAddress">숙소 주소: </label>
                                <input type="text" name="accommodationAddress" id="accommodationAddress" onChange={handleChange} value={accommodationAddress || ''}/>
                                <GoogleMap handleChange={getAccommodationSearched}/>
                                <label htmlFor="accommodationCost">숙박 비용: </label>
                                <input type="number" name="accommodationCost" id="accommodationCost" onChange={handleChange} value={accommodationCost || ''}/>
                                
                                <button type="submit">저장</button>
                            </form>
                        </div>
                        <div>
                            <h2>여행지</h2>
                            <button>일정 추가</button>
                            {itineraryByDate && itineraryByDate.destinationIds.length !== 0 &&
                                
                                itineraryByDate.destinationIds.map((destinationId, id) => {
                                    return (
                                        <DestinationCard
                                            key={id}
                                            title={destinationId.title}
                                            address={destinationId.address}
                                            category={destinationId.category}
                                            timeOfStart={destinationId.timeOfStart}
                                            timeOfEnd={destinationId.timeOfEnd}
                                            cost={destinationId.cost}
                                            isDone={destinationId.isDone}
                                            imgSrc={destinationId.destinationInfo.photoUrl || "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                            handleClick={changeDestination}
                                        >
                                            <button id={destinationId._id}>수정</button>
                                            <button id={destinationId._id}>삭제</button>
                                            <button id={destinationId._id}>완료</button>
                                        </DestinationCard>
                                    )
                                })
                            }

                            
                            {itineraryByDate && 
                            <AddDestinationModal 
                                selectedDate={itineraryByDate.date}
                                itineraryByDateId={itineraryByDate._id}
                                changeSubmit={changeSubmitServer}
                            />
                            }

                            {/* <div>
                                <h2>여행지</h2>
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="title">여행지명: </label>
                                    <input type="text" name="title" id="title" onChange={handleChange} value={accommodationName || ''} required/>
                                    <label htmlFor="address">여행지 주소: </label>
                                    <input type="text" name="address" id="address" onChange={handleChange} value={accommodationAddress || ''}/>
                                    <GoogleMap handleChange={getAccommodationSearched}/>
                                    <label htmlFor="category">카테고리: </label>
                                    <selectDay name="category" id="category">
                                        <option value="javascript">음식점</option>
                                        <option value="php">관광명소</option>
                                        <option value="java">카페</option>
                                        <option value="golang">쇼핑센터</option>
                                        <option value="python">바</option>
                                        <option value="c#">기타</option>
                                        <option value="C++">미정</option>
                                    </selectDay>
                                    <label htmlFor="timeOfStart">일정 시작 시작: </label>
                                    <input type="datetime-local" name="timeOfStart" id="timeOfStart" required onChange={handleChange} min={moment(itineraryByDate.date).startOf("day").format("YYYY-MM-DD HH:mm")} max={moment(itineraryByDate.date).endOf("day").format("YYYY-MM-DD HH:mm")}/>
                                    <label htmlFor="timeOfEnd">일정 종료 시간: </label>
                                    <input type="datetime-local" name="timeOfEnd" id="timeOfEnd" required onChange={handleChange} max={moment(itineraryByDate.date).format("YYYY-MM-DD HH:mm")}/>
                                    <label htmlFor="description">여행지 내용: </label>
                                    <input type="text" name="description" id="description" />
                                    <label htmlFor="cost">예상 비용: </label>
                                    <input type="number" name="cost" id="cost" onChange={handleChange} value={accommodationCost || ''}/>
                                    <button type="submit">저장</button>
                                    <button>취소</button>
                                </form>
                            </div> */}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
export default DetailedItinerary