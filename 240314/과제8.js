const fruit = 'apple'
let printB = null

function printA(){
    const fruit = 'banana'
    console.log(fruit)
}

printB = function(){
    printA()
}
// 구현하기


printA() // banana
printB() // banana