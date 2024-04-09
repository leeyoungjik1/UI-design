const box = document.querySelector('.box')
const button = document.querySelector('button')

function getMousePoints(e){
    const findedElement = document.elementFromPoint(e.clientX, e.clientY)
    findedElement.style.background = 'red'
}

window.addEventListener('click', getMousePoints)