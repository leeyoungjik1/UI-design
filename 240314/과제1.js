function findMaxValue(...args){
    // 구현하기
    const arr = []
    for(let arg of args){ 
        if(isNaN(parseFloat(arg))){
            arg = 0
        }
        arr.push(parseFloat(arg))
    }
    arr.sort((a,b) => a-b)
    return arr[arr.length-1]
}

// 테스트 케이스 
console.log(findMaxValue(-3, 7, -345, 41, 9, 137, 69))
console.log(findMaxValue(-31, 8, null, -26, false, 92, {}, 284, 923, [], "2045.8", 'zip', 54, "1024"))