// divider 함수 구현하기
function divider(value, ...args){
    if(value === 0){
        return args
    }
    const result = args.map(function(arg){
        return arg / value
    })
    return result
}

// 테스트 케이스 
console.log(divider(2, 39, 4, 7, 28, 62, 28))
console.log(divider(0, 39, 4, 7, 28, 62, 28))