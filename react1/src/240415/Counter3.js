import React, { useRef, Component } from 'react';

const Counter3 = () => {
    const count = useRef(0)
    console.log(count)

    const increase = () => {
        console.log(`증가전: ${count.current}`)
        count.current++
        console.log(`증가후: ${count.current}`)
    }
    return (
        <div>
            <h1>카운트: {count.current}</h1>
            <button onClick={increase}>카운팅</button>
        </div>
    )
}

export default Counter3;