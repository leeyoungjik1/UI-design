// // function add(함수파라미터1, 함수파라미터2, 함수파라미터3 ...) // 함수 정의
// let a = 3
// let b = 12

// function add(a(x도 가능), b(y도 가능)){
//     const sum = a(x도 가능) + b(y도 가능)
//     if(sum < 10) return // 함수 안에서 return 키위드를 만나면 아래쪽 코드는 실행되지 않고 종료됨
//     return sum
// }

// // a, b, sum() (지역변수) : 함수 실행이 종료되면 메모리에서 사라짐, 함수 외부에서는 사용 불가


// add() // 함수 실행(호출)

// // 함수 실행(호출) -> 정의부분 코드블럭 실행 -> 실행이 종료되면 함수 호출 부분으로 되돌아옴

// // const sum = add(x, y, z ...) // x, y, z 는 인자
// const sum = add(3,12) // 함수 외부로 다시 저장하여 사용
// console.log(sum)

//--------------------------------------------------------------------------

// 객체: 서로 관련이 있는 변수와 함수의 모음
// 새에 대한 변수와 함수


// let volume = 3 // 새가 지저귀는 음량
// let size = 30 // 새의 크기 30cm
// let type = "참새" // 새의 종

// function speak(){
//     console.log('새가 지저귄다')
// }
// function move(){
//     console.log('새가 이동한다')
// }
// function eat(){
//     console.log('새가 음식을 먹는다')
// }

let bird = {
    volume:3,
    size: 30,
    type: "참새",
    speak: function(volume){ // 객체 내부의 함수 : 매서드 (method)
        console.log('새가 지저귄다', volume)
    },
    move: function(){
        console.log('새가 이동한다')
    },
    eat: function(){
        console.log('새가 음식을 먹는다')
    }
} // 위 코드와 동일

console.log(bird.volume) // volume : 객체 프로퍼티 (property)
console.log(bird.speak(bird.volume))
