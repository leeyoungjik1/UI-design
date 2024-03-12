// const words = ['car', 'paper', 'mobile', 'computer', 'school', 'sun', 'house']


// const slicedWords = words.slice(-4,-1)

// console.log(slicedWords)
// console.log(words)


// const movies = [
//     {title: 'Harry Potter', release: '2003-02-22'}, 
//     {title: 'Indiana Jhones', release: '2009-01-09'}, 
//     {title: 'Jurassic Park', release: '2007-04-13'},
//     {title: 'Iron man', release: '2012-12-18'},
//     {title: 'Spider man', release: '2017-03-07'}
// ]


// const slicedMovies = movies.slice(1,3)
// console.log(slicedMovies)
// movies[1].title = '다른 영화 타이틀'

// console.log(movies)


// let myHonda = {
//     color: "red", 
//     wheels: 4,
//     engine: {cylinders: 4, size: 2.2}
// }
// let myCar = [myHonda, 2, "cherry condition", "purchased 1997"]
// let newCar = myCar.slice(0,2)

// console.log('myCar = ', JSON.stringify(myCar))
// console.log('newCar = ', JSON.stringify(newCar))
// console.log('myCar[0].color = ' + (myCar[0].color))
// console.log('newCar[0].color = ' + (newCar[0].color))


// myHonda.color = 'puple'
// console.log('the new color of my honda is' + myHonda.color)
// console.log('myCar[0].color = ' + myCar[0].color)
// console.log('newCar[0].color = ' + newCar[0].color)



// let str = "stringify"

// console.log(str.slice(0,5))
// console.log(str.slice(0,1))



// const fruits = ['apple', 'banana', 'orange', 'lemon', 'watermelon']




// const x = [1, 2, 3, 4, 5]

// const [y, z] = x
// console.log(y)
// console.log(z)


// const fruits = ['apple', 'banana', 'orange', 'lemon', 'watermelon']
// const [firstFruit, ...rest] = fruits
// console.log(rest)


// let a, b

// [a = 5, b = 7] = [1]

// console.log(a) // 1
// console.log(b) // 7


// let a = 1;
// let b = 3;


// [a, b] = [b, a]
// console.log(a) // 3
// console.log(b) // 1


// function f(){
//     return [1,2,3]
// }
// let a, b
// [a, ,b] = f()

// console.log(a)
// console.log(b)


// const words = ['car', 'mobile', 'sun', 'foot', 'pen']
// const numbers = [1, 2, 3]

// const unitedArr = words.concat(numbers)

// console.log(unitedArr)



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const sum = numbers.reduce((accumlator, number) => accumlator + number, 0)
// console.log(sum)


// const coords = [{ x: 1, y: 2 }, { x: 5, y: 5 }, { x: 3, y: 4 }]
// const vectorSum = coords.reduce((accumulator, coord) => {
//     accumulator = {x: accumulator.x + coord.x, y: accumulator.y + coord.y}
//     return accumulator
// }, {x: 0, y:0})

// console.log(vectorSum)


// const nestedArr = [
//     [0, 1],
//     [2, 3],
//     [4, 5],
// ]

// const flattenedArr = nestedArr.reduce(function(accumulator, arrayInside){
//     return accumulator.concat(arrayInside)
// }, [])
// console.log(flattenedArr)



// var names = ["Alice", "Bruce", "Bob", "Tiff", "Bruce", "Alice"]

// const countedNames = names.reduce(function(allNames, name){
//     if(name in allNames){
//         allNames[name]++
//     }else{
//         allNames[name] = 1
//     }
//     return allNames
// }, {})

// console.log(countedNames)


// const people = [
//     { name: "Alice", age: 21 },
//     { name: "Max", age: 20 },
//     { name: "Jane", age: 20 },
// ];

// function groupBy(objectArray, property){
//     return objectArray.reduce(function(acc, obj){
//         const key = obj[property]
//         console.log(obj.age)
//         if(!acc[key]){
//             acc[key] = []
//         }
//         acc[key].push(obj)
//         return acc
//     }, {})
// }


// const groupedPeople = groupBy(people, "age")
// console.log(groupedPeople)



// const friends = [
//     {
//       name: "Anna",
//       books: ["Bible", "Harry Potter"],
//       age: 21,
//     },
//     {
//       name: "Bob",
//       books: ["War and peace", "Romeo and Juliet"],
//       age: 26,
//     },
//     {
//       name: "Alice",
//       books: ["The Lord of the Rings", "The Shining"],
//       age: 18,
//     },
// ];


// const allbooks = friends.reduce(function(accumulator, friend){
//     return [...accumulator, ...friend.books]
// }, ["Alphabet"])


// console.log(allbooks)



// const arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]


// const result = arr.sort().reduce(function(acc, number){
//     if(acc.length === 0 || acc[acc.length - 1] !== number){
//         acc.push(number)
//     }
//     return acc
// }, [])

// console.log(result)


// const fruits = ['apple', 'banana', 'orange']
// const fruitsStr = fruits.join(' & ')
// console.log(fruitsStr)


// const str = ''
// const sentence = 'I joined swimming club in my highschool'
// const strSeperated = sentence.split(' ', 3)
// console.log(strSeperated)


// const sentence = 'I^,^joined^,^swimming^,^club^,^in^,^my^,^highschool'
// const splitedSentence = sentence.split(['^', '^'])
// console.log(splitedSentence)


// const sentence = 'I joined swimming club in my highschool. that club was awsome !'
// const foundedKeyword = sentence.split(' ').filter(word => word === 'club')
// console.log(foundedKeyword.length)


const sentence = '?죠밌재 트립크스바자'
const splitedSentence = sentence.split('').reverse().join('')
console.log(splitedSentence)