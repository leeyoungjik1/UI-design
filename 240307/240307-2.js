const fruits = ['apple', 'banana', 'peach', 'strawberry', 'watermelon']
const icons = ['🍎', '🍌', '🍑', '🍓', '🍉']
const rootDiv = document.getElementById('root')


function addIcons(fruit, index){
    const item = document.createElement('div')
    item.innerText = `${icons[index]} ${fruit}`
    return item
}
function displayFruits(item){
    rootDiv.appendChild(item)
}


const fruitsRefined = fruits.map(addIcons)
console.log(fruitsRefined)


fruitsRefined.forEach(displayFruits)