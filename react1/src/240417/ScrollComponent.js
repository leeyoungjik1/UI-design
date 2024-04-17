import React from "react";
import './ScrollComponent.css'

const ScrollComponent = () => {
    const setPosition = (e) => {
        document.getElementById(`content-${e.target.id}`)
        .scrollIntoView({behavior: 'smooth'})
    }
    return (
        <>
            <div className="ScrollComponent-tabs">
                <div className="ScrollComponent-tab" id="0" onClick={setPosition}>컨텐츠1</div>
                <div className="ScrollComponent-tab" id="1" onClick={setPosition}>컨텐츠2</div>
                <div className="ScrollComponent-tab" id="2" onClick={setPosition}>컨텐츠3</div>
                <div className="ScrollComponent-tab" id="3" onClick={setPosition}>컨텐츠4</div>
            </div>

            <div className="ScrollComponent-container">
                <div className="ScrollComponent-content" id="content-0">
                    <span>햇빛 좋은 날 여행을 떠나보자</span>
                </div>
                <div className="ScrollComponent-content" id="content-1">
                    <span>좋은 날 여행을 떠나보자</span>
                </div>
                <div className="ScrollComponent-content" id="content-2">
                    <span>여행을 떠나보자</span>
                </div>
                <div className="ScrollComponent-content" id="content-3">
                    <span>떠나보자</span>
                </div>
            </div>
        </>
    )
}
export default ScrollComponent