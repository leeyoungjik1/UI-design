function build2DArray(rows, columns){
    // 구현하기
    const newArr = new Array(rows)
    for(let n=0; n<rows; n++){
        newArr[n] = new Array(columns).fill(0)
    }
    return newArr
}

console.log(build2DArray(7, 3))