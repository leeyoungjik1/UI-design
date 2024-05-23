import React, { useState, useEffect } from "react";
import { Outlet } from 'react-router-dom'
import axios from 'axios'

// URL 주소: /itinerary

function Main(){
    // const [userId, setUserId] = useState()

    // axios.get('http://127.0.0.1:5000/api/users/getId', {
    // headers: {
    //     'Constent-Type': 'application/json',
    //     'Authorization': `Bearer ${localStorage.getItem("token")}`
    // }})
    // .then((res) => {
    //     setUserId(res.data._id)
    // })
    // console.log(userId)


    return (
        <div>
            <h1>Itinerary Main PAGE</h1>
            <Outlet/>
        </div>
    )
}
export default Main