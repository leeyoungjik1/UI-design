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
    'level'
]

function isA(word){
    return word.includes('a')
}

const found = words.filter(isA)

function word(found){
    console.log(found)
}

found.forEach(word)
