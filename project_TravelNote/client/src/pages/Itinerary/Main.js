import React from "react";
import { Outlet } from 'react-router-dom'

function Main(){
    return (
        <div>
            <h1>Itinerary Main PAGE</h1>
            <Outlet/>
        </div>
    )
}
export default Main