import React from "react";

function AboutInfo({info}){
    return (
        <div>
            <h2>Address:</h2>
            <p>{info.adress}</p>
            <br/>
            <h2>Email:</h2>
            <p>{info.email}</p>
            <br/>
            <h2>Phone:</h2>
            <p>{info.phone}</p>
            <br/>
            <h2>Instagram:</h2>
            <p>{info.instagram}</p>
        </div>
    )
}
export default AboutInfo