function add(a, b){
    return a + b
}
function subtract(a, b){
    return a - b
}
function multiply(a, b){
    return a * b
}
function divider(a, b){
    return a / b
}
function pow(a, b){
    // 구현하기
    return a ** b
}

function calculator(mode, a, b, ...funcs){
    let ret = null
    switch(mode){
        case '+':
            ret = funcs[0](a, b)
            break
        case '-':
            ret = funcs[1](a, b)
            break
        case '*':
            ret = funcs[2](a, b)
            break
        case '/':
            ret= funcs[3](a, b)
            break
        case '^':
            ret = funcs[4](a, b)
            break
    }
    return ret
}

// 테스트 케이스
const ret1 = calculator('+', 3, 4, add, subtract, multiply, divider, pow)
const ret2 = calculator('-', 3, 4, add, subtract, multiply, divider, pow)
const ret3 = calculator('*', 3, 4, add, subtract, multiply, divider, pow)
const ret4 = calculator('/', 3, 4, add, subtract, multiply, divider, pow)
const ret5 = calculator('^', 3, 4, add, subtract, multiply, divider, pow)

console.log(ret1)
console.log(ret2)
console.log(ret3)
console.log(ret4)
console.log(ret5)