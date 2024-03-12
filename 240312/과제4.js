const fruits = [['apple', 570, 32], ['orange', 270, 65], ['strawberry', 30, 120]]
const result = []
for(let n=0; n<fruits.length; n++){
    fruits[n] = [fruits[n][0], fruits[n][1] * fruits[n][2]]
}

fruits.forEach(function(fruit){
    result.push({name: fruit[0], totalPrice: fruit[1]})
})

console.log(result)