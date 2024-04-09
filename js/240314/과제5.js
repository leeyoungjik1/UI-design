function add(...args){
    let sum = 0
    // console.log(args)
    for(let arg of args){
        if(!isNaN(parseFloat(arg))){
            sum += parseFloat(arg)
        }
    }
    // 구현하기
    return sum
}

// 테스트 케이스
console.log(add(3, null, 19, false, '9', [], 7, {}, '', 34, 'earth', '3.9')) // 75.9