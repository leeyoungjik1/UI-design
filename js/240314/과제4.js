// countDuplication 함수 구현하기 
function countDuplication(flag, ...args){
    let count = 0
    let n = 0
    while(args.indexOf(flag, n) !== -1){
        count++
        n = args.indexOf(flag, n) + 1
    }
    return count
}

// 테스트 케이스 
console.log(countDuplication('cat', 'apple', 'cat', 'tiger', 'cat', 'water', 'computer', 'cat', 'lion', 'pear', 'cat')) // 4