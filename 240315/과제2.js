const animals = ['cat', 'lion', 'turtle', 'dog', 'pig']
const fruits = ['apple', 'banana', 'strawberry', 'pineapple', 'pear']

// function searchItemInCategory(category, key){
//     return category.filter(item => item === key)[0]
// }

// console.log(searchItemInCategory(animals, 'turtle')) // searchItemInCategory 내부의 category 변수에는 접근하지는 못하지만 외부인자에 의하여 수정이 가능함
// console.log(searchItemInCategory(animals, 'pig'))
// console.log(searchItemInCategory(animals, 'banana'))

// console.log(searchItemInCategory(fruits, 'strawberry'))
// console.log(searchItemInCategory(fruits, 'apple'))
// console.log(searchItemInCategory(fruits, 'lion'))

function searchItemInCategory(category){
    function searchItem(key){
        return category.filter(item => item === key)[0]
    }
    return searchItem
}

const searchItemInCategory1 = searchItemInCategory(animals)
console.log(searchItemInCategory1('turtle'))
console.log(searchItemInCategory1('pig'))
console.log(searchItemInCategory1('banana'))

const searchItemInCategory2 = searchItemInCategory(fruits)
console.log(searchItemInCategory2('strawberry'))
console.log(searchItemInCategory2('apple'))
console.log(searchItemInCategory2('lion'))