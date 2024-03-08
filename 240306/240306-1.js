// const animals = ['lion', 'tiger', 'cat', 'dog', 'pig', 'cat']

// const searchAnimal = animals.indexOf('cat', 3)

// console.log(searchAnimal)



// const animals = ['lion', 'tiger', 'cat', 'dog', 'pig', 'cat', 'giraffe', 'duck', 'cat']
// const animalToSearch = 'cat'
// const searchedIndexes = []

// let foundIndex = animals.indexOf(animalToSearch)
// while(foundIndex != -1){
//     searchedIndexes.push(foundIndex)
//     foundIndex = animals.indexOf(animalToSearch, foundIndex+1)
// }
// console.log(searchedIndexes)





// const veggies = ["potato", "tomato", "chillies", "green-pepper"]


// function updateVegetablesCollection(veggies, veggie){
//     if(veggies.indexOf(veggie) === -1){
//         veggies.push(veggie)
//         console.log(`새로운 veggies 컬렉션은 ${veggies}`)
//     }else{
//         console.log(`${veggie}는 이미 존재합니다.`)
//     }
// }

// updateVegetablesCollection(veggies, "spinach")
// updateVegetablesCollection(veggies, "spinach")



// let str = 'Widget with id'

// console.log( str.indexOf('Widget') )
// console.log(str.indexOf('widget'))
// console.log(str.indexOf('id'))



// const animals = ['lion', 'tiger', 'cat', 'dog', 'pig', 'cat']

// const searchedAnimal = animals.lastIndexOf('cat')

// console.log(searchedAnimal)


// const fruits = ['apple', 'banana', 'orange', 'watermelon']

// function longest(element){
//     return element.length > 6
// }

// const found = fruits.find(longest)
// console.log(found)


// const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
//   ]

// function isCherries(fruit){
//     return fruit.name === 'cherries'
// }

// console.log(inventory.find(isCherries))



// function isPrime(element, index, array){
//     let start = 2
//     while(start <= Math.sqrt(element)){
//         if(element % start === 0){
//             return false
//         }
//         start++
//     }
//     return element > 1
// }


// console.log([4, 6, 8, 12].find(isPrime)) // undefined, 소수 없음
// console.log([4, 5, 8, 12].find(isPrime)) // 5
// console.log([4, 7, 12, 13].find(isPrime)) // 7


// const fruits = ['apple', 'banana', 'orange', 'watermelon']

// function longest(element){
//     return element.length > 6
// }

// const foundedIndex = fruits.findIndex(longest)
// console.log(foundedIndex)



// function isPrime(element){
//     if(element % 2 === 0 || element < 2){
//         return false
//     }

//     for(let factor = 3; factor <= Math.sqrt(element); factor+=2){
//         if(element % factor === 0){
//             return false
//         }
//     }
//     return true
// }



// console.log([4, 6, 8, 9, 12].findIndex(isPrime)) // -1, not found
// console.log([4, 6, 7, 9, 12].findIndex(isPrime)) // 2 (array[2] is 7)



// const seasons = ['spring', 'summer', 'autumn', 'winter']

// console.log(seasons.includes('summer')) // true
// console.log(seasons.includes('cat')) // false


// const title = 'Haprry potter'

// console.log(title.includes('potter')) // true

// console.log( "Widget with id".includes("Widget") ) // true
// console.log( "Hello".includes("Bye") ) // false


// console.log( "Widget".includes("id") ); // true
// console.log( "Widget".includes("id", 3) ); // false, 세 번째 위치 이후엔 "id"가 없습니다.



// const arr = ["a", "b", "c"]

// console.log(arr.includes("b", -2)) // false


// const words = ['car', 'paper', 'mobile', 'computer', 'school', 'sun', 'house']

// function isShort(word){
//     return word.length < 5
// }

// const wordsFiltered = words.filter(isShort)
// console.log(wordsFiltered)


// function isBigEnough(value){
//     return value < 10
// }


// const filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
// console.log(filtered)


// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// function isPrime(num){
//     for(let i=2; i<num; i++){
//         if(num % i === 0){
//             return false
//         }
//     }
//     return num > 1
// }

// console.log(array.filter(isPrime))


const fruits = ["apple", "banana", "grapes", "mango", "orange"]

function filterItems(arr, query){
    const filteredFruits = arr.filter(function(fruit){
        if(fruit.toLowerCase().includes(query.toLowerCase())){
            return true
        }else{
            return false
        }
    })
    return filteredFruits
}



// console.log(filterItems(fruits, "ap"))
// console.log(filterItems(fruits, "an"))




// const arr = [
//     { id: 15 },
//     { id: -1 },
//     { id: 0 },
//     { id: 3 },
//     { id: 12.2 },
//     {},
//     { id: null },
//     { id: NaN },
//     { id: "undefined" },
//   ]
// let invalidEntries = 0

// function filterByID(item){
//     if(Number.isInteger(item.id) && item.id > 0){
//         return true
//     }
//     invalidEntries++
//     return false
// }

// const arrByID = arr.filter(filterByID)

// console.log(arrByID)
// console.log(invalidEntries)



// const numbers = [32, 6, 4, 13, 9, 57]

// function isMultiplyByThree(element){
//     return element % 3 === 0
// }

// console.log(numbers.some(isMultiplyByThree))



// function isBiggerThan10(element){
//     return element > 10
// }

// console.log([2,5,8,1,4].some(isBiggerThan10))
// console.log([12,2,5,8,1,4].some(isBiggerThan10))





// const fruits = ["apple", "banana", "mango", "guava"]


// function checkAvailability(arr, val){
//     return arr.some(fruit => fruit === val)
// }

// console.log(checkAvailability(fruits, "kela")) // false
// console.log(checkAvailability(fruits, "banana")) // true




// const TRUTHY_VALUES = [true, "true", 1]

// function getBoolean(val){
//     if(typeof val === "string"){
//         val = val.toLowerCase().trim()
//     }
//     return TRUTHY_VALUES.some(t => t === val)
// }

// console.log(getBoolean(true))
// console.log(getBoolean("false"))
// console.log(getBoolean(1))
// console.log(getBoolean("True   "))



// const numbers = [32, 6, 4, 13, 9, 57]

// function isMutiplyByThree(element){
//     return element % 3 === 0
// }

// console.log(numbers.every(isMutiplyByThree))



// function isSubset(arr1, arr2){
//     return arr2.every(element => arr1.includes(element))
// }


// console.log(isSubset([1,2,3,4,5,6,7], [5,7,6]))
// console.log(isSubset([1,2,3,4,5,6,7], [5,8,7]))


// const currentTime = [3, 8, 23] // 시, 분, 초
// const timeStr = []

// currentTime.forEach(function(time){
//     timeStr.push(`${time<10 ? '0' + time : time}`)
// })

// console.log('********time************')
// console.log(timeStr.join(':'))




const words = ["one", "two", "three", "four"]
words.forEach((word) => {
  console.log(word)
  if (word === "three") {
    words.shift() //'one'은 배열에서 삭제됩니다.
  }
}) // one // two // four

console.log(words) // ['two', 'three', 'four']