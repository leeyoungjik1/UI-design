const fruits = [['apple', 570], ['orange', 270], ['strawberry', 30]]
const result = []


fruits.forEach(function(fruit){
    result.push({name: fruit[0], price: fruit[1]})
})

console.log(result)