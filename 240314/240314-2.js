// const global = 3

// function globalFunction(){
//     const localOuter = 1
//     function localFunction(){
//         const local = 1
//         return global + localOuter + local
//     }
//     return localFunction()
// }



// console.log(globalFunction())



// const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

// function map(f, arr){
//     const newArr = []
//     for(let i in arr){
//         newArr[i] = f(arr[i])
//     }
//     return newArr
// }
// function str2num(element){
//     return parseInt(element)
// }



// const numbersParsed = map(str2num, numbers)
// console.log(numbersParsed)

// function add(a,b){
//     return a+b
// }
// function subtract(a,b){
//     return a-b
// }
// function multiplt(a,b){
//     return a*b
// }
// function divider(a,b){
//     return a/b
// }

// function calculator(mode, a, b, ...funcs){
//     let ret = null
//     switch(mode){
//         case '+':
//             ret = funcs[0](a,b)
//             break
//         case '-':
//             ret = funcs[1](a,b)
//             break
//         case '*':
//             ret = funcs[2](a,b)
//             break
//         case '/':
//             ret = funcs[3](a,b)
//             break
//     }
//     return ret
// }



// const ret1 = calculator('+', 3, 4, add, subtract, multiplt, divider)
// const ret2 = calculator('-', 3, 4, add, subtract, multiplt, divider)
// const ret3 = calculator('*', 3, 4, add, subtract, multiplt, divider)
// const ret4 = calculator('/', 3, 4, add, subtract, multiplt, divider)

// console.log(ret1)
// console.log(ret2)
// console.log(ret3)
// console.log(ret4)




// function initCount(){
//     let cnt = 0
//     function increaseCount(){
//         cnt ++
//         return cnt
//     }
//     return increaseCount
// }

// const cnt1 = initCount()
// const cnt2 = initCount()
// const cnt3 = initCount()

// cnt1()
// console.log(cnt1())

// cnt2()
// cnt2()
// console.log(cnt2())

// cnt3()
// cnt3()
// cnt3()
// console.log(cnt3())




function makeAdder(){
    let a = 0
    let b = 0
    let c = 0
    function addNums(){
        return ++a + ++b + ++c
    }
    return addNums
}

const adder1 = makeAdder()
const adder2 = makeAdder()
const adder3 = makeAdder()

adder1()
console.log(adder1())
console.log(adder2())
console.log(adder3())