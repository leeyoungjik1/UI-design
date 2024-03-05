const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let alphabets = ''
let pyramid = []

for(let n=0; n<alphabet.length; n++){
    alphabets += alphabet[n]
    pyramid[n] = alphabets
}

console.log(pyramid)