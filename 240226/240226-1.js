const fruitContainer = document.getElementById('fruits')
const fruits = document.querySelectorAll('.fruit')
let prevTarget = null

function moveToRight(e){
    console.log(e.target)
    if(prevTarget != null){
        prevTarget.style.marginLeft = '0px'
    }

    if(e.target.className === 'fruit'){
        e.target.style.marginLeft = '100px'
        prevTarget = e.target
    }
}

// for(let fruit of fruits){
//     fruit.addEventListener('click', moveToRight)
// }

fruitContainer.addEventListener('click', moveToRight)