// const _2dArray = []
// const rows = 5
// const columns = 2


// for(let i=0; i<rows; i++){
//     const element = []
//     for(let j=columns*i; j<columns*i+columns; j++){
//         element.push(j+1)
//     }
//     _2dArray.push(element)
// }

// console.log(_2dArray)


// const rows = 10
// const columns = 5
// const _2dArray = new Array(rows)


// for(let i=0; i<rows; i++){
//     const element = new Array(columns)
//     for(let j=columns*i; j<columns*i+columns; j++){
//         element[j - columns*i] = j+1
//     }
//     _2dArray[i] = element
// }

// console.log(_2dArray)


// const fruits = [['apple', 570], ['orange', 270], ['strawberry', 30]]


// for(let fruit of fruits){
//     for(let i in fruit){
//         console.log(fruit[i])
//     }
// }


// const fruits = [['apple', 570], ['orange', 270], ['strawberry', 30]]

// for(let fruit of fruits){
//     fruit.push(Math.floor(Math.random()*100+1))
// }
// console.log(fruits)



// const persons = [
//     {name: 'sunrise', age: 23},
//     {name: 'victoria', age: 19},
//     {name: 'daniel', age: 28},
//     {name: 'ammy', age: 21},
//     {name: 'smith', age: 32},
// ]

// for(let i in persons){
//     persons[i] = [persons[i].name, persons[i].age]
// }

// console.log(persons)



// const persons = [
//     [
//         "sunrise",
//         23
//     ],
//     [
//         "victoria",
//         19
//     ],
//     [
//         "daniel",
//         28
//     ],
//     [
//         "ammy",
//         21
//     ],
//     [
//         "smith",
//         32
//     ]
// ]

// for(let i in persons){
//     persons[i] = {name: persons[i][0], age:persons[i][1]}
// }

// console.log(persons)



// let _1dArray = []

// const persons = [
//     [
//         "sunrise",
//         23
//     ],
//     [
//         "victoria",
//         19
//     ],
//     [
//         "daniel",
//         28
//     ],
//     [
//         "ammy",
//         21
//     ],
//     [
//         "smith",
//         32
//     ]
// ]

// for(let person of persons){
//     _1dArray = _1dArray.concat(person)
// }

// console.log(_1dArray)



const persons = [
    "sunrise",
    23,
    "victoria",
    19,
    "daniel",
    28,
    "ammy",
    21,
    "smith",
    32
]


const columns = 2
const rows = persons.length / columns
const _2dArray = new Array(rows).fill(0)

for(let i=0; i<rows; i++){
    const person = new Array(columns).fill(0)
    for(let j=0; j<columns; j++){
        person[j] = persons[columns*i+j]
    }
    _2dArray[i] = person
}


console.log(_2dArray)