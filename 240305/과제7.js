const words = [
    'abc',
    'animal',
    'fruit',
    'abba',
    'abcba',
    'location',
    'radar',
    'madam',
    'mario',
    'level',
]
let count = 0

for(let i=0; i<words.length; i++){
    let word = ''
    for(let n=0; n<Math.floor(words[i].length/2); n++){
        word += words[i][n]
    }

    let backword = ''
    for(let n=words[i].length-1; n>Math.ceil(words[i].length/2-1); n--){
        backword += words[i][n]
    }
    if(word === backword){
        count++
    }
}

console.log(count)