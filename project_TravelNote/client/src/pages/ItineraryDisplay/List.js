import React, { useState, useEffect } from "react";
import axios from 'axios'
import MyItineraryCard from "../../components/MyItineraryCard";

// URL 주소: /itinerary/myitinerary

function List(){
    const [list, setList] = useState([])
    // console.log(list)
    

    // 전체 일정 리스트 가져오기
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/itinerarys/list?filter=lastModifiedAt`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res) => setList(res.data.Itinerarys))
    }, [])

    return (
        <div>
            <h1>My Itinerary List PAGE</h1>
            <div>
                <div>
                    <div>전체</div>
                    <div>예정</div>
                    <div>완료</div>
                </div>
                <select name="filter" id="filter">
                    <option value="lastModifiedAt">최근 수정일 순</option>
                    <option value="dateOfStart">여행 시작일 순</option>
                </select>
            </div>
            {list.length !== 0 && list.map((itinerary, id) => {
                return (
                    <MyItineraryCard
                        key={id}
                        itinerary={itinerary}
                    />
                )
            })}
        </div>
    )
}
export default List