import React, { useState, useEffect } from "react";
import axios from 'axios'
import SharedItineraryCard from "../../components/SharedItineraryCard";
import styles from './List.module.css'

// URL 주소: /itinerary/shareditinerary

function List(){
    const [list, setList] = useState([])
    const [formData, setFormData] = useState({
        searchFilter: 'title',
        searchWord: '',
    })
    // console.log(formData)

    const handleChange = (e) => {
        const { name, value } = e.target 
        setFormData({ ...formData, [name]: value })
    }

    // 검색어 검색
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get(`http://127.0.0.1:5000/api/itinerarys/list/sharedlist/searched?searchFilter=${searchFilter}&searchWord=${searchWord}&isDone=${formData.isDone}`)
        .then((res) => {
            // console.log(res.data)
            setList(res.data.Itinerarys)
        })
    }

    // 전체 일정 리스트 가져오기
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/itinerarys/sharedlist`)
        .then((res) => setList(res.data.Itinerarys))
    }, [])

    const {
        searchFilter,
        searchWord
    } = formData 

    return (
        <div className={styles.listPage}>
            <h1>다른 사람의 여행</h1>
            <form onSubmit={handleSubmit}>
                    <select name="searchFilter" id="searchFilter" onChange={handleChange} value={searchFilter}>
                        <option value="title">제목</option>
                        <option value="city">대표 도시</option>
                        <option value="nickName">닉네임</option>
                    </select>
                    <input type='text' name="searchWord" id="searchWord" onChange={handleChange} value={searchWord}></input>
                    <button type="submit">검색</button>
                </form>
            {list.length !== 0 && list.map((itinerary, id) => {
                return (
                    <SharedItineraryCard
                        key={id}
                        itinerary={itinerary}
                    />
                )
            })}
        </div>
    )
}
export default List