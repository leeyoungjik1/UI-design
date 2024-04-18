import { useState, useEffect } from "react";

function useCounter(arrLength){
    const [count, setCount] = useState(0)

    useEffect(() => {
        const increaseCount = () => {
            clearTimeout(timerId)
            setCount(count+1)
        }
        const timerId = setTimeout(increaseCount, 1000)
        return () => {
            clearTimeout(timerId)
        }
    }, [count])
    return count % arrLength
}
export default useCounter