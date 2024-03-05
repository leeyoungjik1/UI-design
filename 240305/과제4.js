const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let str = []

function randomNumber(n){
    return Math.floor(Math.random() * n)
}

function randomStr(n){
    for(let i=0; i<n; i++){
        str[i] = alphabet[randomNumber(alphabet.length)]
    }
    return str
}

console.log(randomStr(3))
console.log(randomStr(5))
console.log(randomStr(7))