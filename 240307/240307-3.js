// const seasons = ['spring', 'summer', 'autumn']

// const arrLength = seasons.push('winter')

// console.log(seasons)
// console.log(arrLength)



// const multiplyBySix = []

// for(let i=1; i<100; i++){
//     multiplyBySix.push(6*i)
// }
// console.log(multiplyBySix)


// const cities = ['seoul', 'busan', 'daegu']

// cities.push('deajeon', 'ulsan')

// console.log(cities)



// const cities = ['seoul', 'busan', 'daegu']
// const citiesToAdd = ['deajeon', 'ulsan']


// cities.push(...citiesToAdd)

// console.log(cities)




// const companies = ['Samsung', 'LG', 'Google', 'Facebook', 'Amazon']


// console.log(companies.pop())
// console.log(companies)



// const alphabets = ['a', 'b', 'c']
// const arrLength = alphabets.unshift('d', 'e')

// // const firstAlphabet = alphabets.shift()

// // console.log(firstAlphabet)
// console.log(arrLength)
// console.log(alphabets)


// const names = ["Andrew", "Edward", "Paul", "Chris", "John"]

// while((i= names.shift()) !== undefined){
//     console.log(i)
//     console.log(names)
// }




// const fruits = ['apple', 'orange', 'watermelon']

// const removedFruits = fruits.splice(1, 0, 'banana', 'strawberry')

// console.log(removedFruits)
// console.log(fruits)


// const fruits = ['apple', 'banana', 'strawberry', 'orange', 'watermelon']

// const removedFruits = fruits.splice(0, 3, 'pear', 'lemon')

// console.log(removedFruits)
// console.log(fruits)



// const fruits = ['apple', 'banana', 'strawberry', 'orange', 'watermelon']

// const removedFruits = fruits.splice(fruits.length - 4, 2)

// console.log(removedFruits)
// console.log(fruits)



// const words = ['car', 'paper', 'mobile', 'computer', 'school', 'sun', 'house']

// words.sort()
// console.log(words)



// const numbers = [100, 3, 394, 27, 4, 82, 6, 5, 94]

// function compareNumbers(a, b){
//     if(a>b) return 1
//     if(a<b) return -1
//     return 0
// }


// numbers.sort(compareNumbers)

// console.log(numbers)



const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
]

items.sort(function(a,b){
    const nameA = a.name.toLocaleUpperCase()
    const nameB = b.name.toLocaleUpperCase()
    if(nameA<nameB){
        return -1
    }
    if(nameA>nameB){
        return  1
    }
    return 0
})

console.log(items)