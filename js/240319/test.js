function initCount(){
    let cnt = 0
    function increaseCount(){
        cnt++
        return cnt
    }
    return increaseCount
}

const cnt1 = initCount() // 클로저 (독립적인 실행환경) 생성
const cnt2 = initCount() // 클로저 (독립적인 실행환경) 생성
const cnt3 = initCount() // 클로저 (독립적인 실행환경) 생성

cnt1() 
console.log(cnt1()) 
cnt1() 
console.log(cnt1()) 

cnt2()
cnt2()
console.log(cnt2())

cnt3()
cnt3()
cnt3()
console.log(cnt3())