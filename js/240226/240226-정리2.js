// 프로그램의 흐름 : 동기, 비동기

// 동기 : 프로그램이 순서대로 실행됨
// 비동기 : 프로그랭 흐름이 순차적이지 않음

function a(){
    console.log('1')
}
function b(){
    console.log('2')
}
function c(){
    console.log('3')
}

console.log(a())
console.log(b())

setTimeout(function(){
    console.log('비동기')
}, 0) // 비동기 : 모든게 실행된 이후에 실행됨
console.log(c())