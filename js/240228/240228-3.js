const box = document.querySelector('.box')
const button = document.querySelector('button')


function getElementCoords(e){
    const coords = box.getBoundingClientRect()
    console.log('X 좌표: ', coords.x)
    console.log('Y 좌표: ', coords.y)
    console.log('너비: ', coords.width)
    console.log('높이: ', coords.height)
    console.log('top: ', coords.top)
    console.log('bottom: ', coords.bottom)
    console.log('left: ', coords.left)
    console.log('right: ', coords.right)
}

button.addEventListener('click', getElementCoords)
