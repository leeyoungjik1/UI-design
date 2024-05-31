import React, { useState, useEffect } from "react";
import axios from 'axios'
import ItineraryCard from "../../components/ItineraryCard";
import { useNavigate } from 'react-router-dom'
import FilterButtons from "../../components/FilterButtons";
import styles from './ChangeList.module.css'


// URL 주소: /itinerary/changelist

function ChangeList(){
    const navigate = useNavigate()

    const [list, setList] = useState([])
    const [isDone, setIsDone] = useState('')
    const [formData, setFormData] = useState({
        searchFilter: 'title',
        searchWord: '',
        isDone: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target 
        setFormData({ ...formData, [name]: value })
    }

    const handleChangeIsDone = (e) => {
        switch(e.target.innerHTML){
            case '전체':
                setIsDone('전체')
                setFormData({
                    searchFilter: 'title',
                    searchWord: '',
                    isDone: ''
                })
                break
            case '예정':
                setIsDone('schedule')
                setFormData({ ...formData, isDone: 'schedule' })
                break
            case '완료':
                setIsDone('completion')
                setFormData({ ...formData, isDone: 'completion' })
                break                         
        }
    }

    // 선택한 일정 상태(예정, 완료) 변경
    const handleisDone = (e, changeStatus) => {
        axios.get('http://127.0.0.1:5000/api/users/getId', {
            headers: {
                'Constent-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => {
            console.log(changeStatus)
            axios.put(`http://127.0.0.1:5000/api/itinerarys/changelist/${e.target.id}`, {isDone: changeStatus}, {
                headers: {
                    'Constent-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then((res) => {
                window.location.reload();
            }).catch((err) => {
                console.log(err)
            })
        })
    }

    // 선택한 일정 삭제
    const handleDelete = (e) => {
        axios.get('http://127.0.0.1:5000/api/users/getId', {
            headers: {
                'Constent-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => {
            axios.delete(`http://127.0.0.1:5000/api/itinerarys/changelist/${e.target.id}`, {
                headers: {
                    'Constent-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then((res) => {
                window.location.reload();
            }).catch((err) => {
                console.log(err)
            })
        })
    }

    const changeItinerary = (e) => {
        // console.dir(e.target.innerText)
        switch(e.target.innerText){
            case '수정':
                navigate(`/itinerary/details/${e.target.id}`)
                break
            case '삭제':
                handleDelete(e)
                break
            case '완료':
                handleisDone(e, true)
                break
            case '예정':
                handleisDone(e, false)
                break
        }
    }

    // 검색어 검색
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get(`http://127.0.0.1:5000/api/itinerarys/list/searched?searchFilter=${searchFilter}&searchWord=${searchWord}&isDone=${formData.isDone}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res) => {
            // console.log(res.data)
            setIsDone('')
            setList(res.data.Itinerarys)
        })
    }

    // 변경할 전체 일정 리스트 가져오기
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/itinerarys/list/searched?searchFilter=${searchFilter}&searchWord=${searchWord}&isDone=${formData.isDone}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res) => {
            // console.log(res.data)
            setList(res.data.Itinerarys)
        })
    }, [isDone])

    const {
        searchFilter,
        searchWord
    } = formData 

    return (
        <div className={styles.changeListPage}>
            <h1>나의 여행 일정 관리</h1>
            <div className={styles.filterContronBox}>
                <FilterButtons handleClick={handleChangeIsDone}/>
                <form onSubmit={handleSubmit}>
                    <select name="searchFilter" id="searchFilter" onChange={handleChange} value={searchFilter}>
                        <option value="title">제목</option>
                        <option value="city">대표 도시</option>
                    </select>
                    <input type='text' name="searchWord" id="searchWord" onChange={handleChange} value={searchWord}></input>
                    <button type="submit">검색</button>
                </form>
            </div>
            <div className={styles.itineraryCardContainer}>
                {list.length !== 0 && list.map((itinerary, id) => {
                    const imgSrcSearched1 = itinerary.itineraryByDateIds.map((itineraryByDateId) => {
                        return (
                            itineraryByDateId.destinationIds.map((destinationId) => {
                                return destinationId.destinationInfo.photoUrl
                            })
                        )
                    })
                    const imgSrcSearched2 = imgSrcSearched1.find(res => {
                        return res.length !== 0 && res[0] !== ''
                    })
                    let imgSrcSearched3 = undefined
                    if(imgSrcSearched2){
                        imgSrcSearched3 = imgSrcSearched2.find(res => {
                            return res
                        })
                    }
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
                            imgSrc={imgSrcSearched3 || "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                            // imgSrc={
                            //     itinerary.itineraryByDateIds.length === 0 ?
                            //     "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" :
                            //     itinerary.itineraryByDateIds[0].destinationIds.length === 0 ?
                            //     "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" :
                            //     itinerary.itineraryByDateIds[0].destinationIds[0].destinationInfo.photoUrl ||
                            //     "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            // }
                            handleClick={changeItinerary}
                        >
                            <button id={itinerary._id}>수정</button>
                            <button id={itinerary._id}>삭제</button>
                            <button id={itinerary._id}>{itinerary.isDone ? "예정" : "완료"}</button>
                        </ItineraryCard>
                    )
                })}
            </div>
        </div>
    )
}
export default ChangeList