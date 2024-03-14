const numbers = [121, 23, 345, 43, 59]


function pickIndex(len){
    return Math.floor(Math.random() * len)
}

function shuffle(arr){
    // 구현하기
    for(let index in arr){
        let ranIndex = pickIndex(arr.length)
        if(parseFloat(index) === ranIndex){
            ranIndex = pickIndex(arr.length)
        }
        [arr[index], arr[ranIndex]] = [arr[ranIndex], arr[index]]

        return arr
    }
}

console.log(shuffle(numbers))