// getDistance 함수 구현하기
function getDistance({x: x1, y: y1} = {x: 0, y: 0}, {x: x2, y: y2} = {x: 0, y: 0}){
    return Math.sqrt((x2-x1)**2 + (y2-y1)**2)
}
 
 // 테스트 케이스
 console.log(getDistance({x: 3, y: 2}, {x: 8, y: 14}))
 console.log(getDistance({x: 3, y: 4}))