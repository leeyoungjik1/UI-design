import React from "react";
import { Link } from 'react-router-dom'



function MainMenu({menus}){
    return (
        <div className="main-menus">
            {menus.map((menu, id) => <Link key={id} to={menu.url}>{menu.title}</Link>)}
        </div>
    )
}
export default MainMenu