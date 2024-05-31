import React, { useState, useEffect } from "react";
import axios from 'axios'
import MyItineraryCard from "../../components/MyItineraryCard";
import FilterButtons from "../../components/FilterButtons";
import styles from './List.module.css'


// URL 주소: /itinerary/myitinerary

function List(){
    const [list, setList] = useState([])
    const [sort, setSort] = useState('lastModifiedAt')
    const [filter, setFilter] = useState('')
    // console.log(list)
    // console.log(filter)
    
    const handleChange = (e) => {
        if(e.target.tagName === 'SELECT'){
            setSort(e.target.value)
        }else if(e.target.tagName === 'BUTTON'){
            switch(e.target.innerHTML){
                case '전체':
                    setFilter('')
                    break
                case '예정':
                    setFilter('schedule')
                    break
                case '완료':
                    setFilter('completion')
                    break                         
            }
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
                console.log(res)
                window.location.reload();
            }).catch((err) => {
                console.log(err)
            })
        })
    }

    // 여행 상태(예정, 완료) 변경
    const changeItinerary = (e) => {
        // console.dir(e.target.innerText)
        switch(e.target.innerHTML){
            case '완료':
                handleisDone(e, false)
                break
            case '예정':
                handleisDone(e, true)
                break
        }
    }

    // 전체 일정 리스트 가져오기
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/itinerarys/list?sort=${sort}&filter=${filter}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res) => setList(res.data.Itinerarys))
    }, [sort, filter])

    return (
        <div className={styles.listPage}>
            <h1>나의 여행</h1>
            <div className={styles.filterContronBox}>
                <FilterButtons handleClick={handleChange}/>
                <select name="sort" id="sort" onChange={handleChange} value={sort}>
                    <option value="lastModifiedAt">최근 수정일 순</option>
                    <option value="dateOfStart">여행 시작일 순</option>
                </select>
            </div>
            <div className={styles.itinerarys}>
                {list.length !== 0 && list.map((itinerary, id) => {
                    return (
                        <MyItineraryCard
                            key={id}
                            itinerary={itinerary}
                            handleClick={changeItinerary}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default List