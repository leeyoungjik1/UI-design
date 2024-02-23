
const circle = document.querySelector('.circle')
const div = document.createElement('div')
div.classList.add('circle')
const body = document.querySelector('.body')


// function addimg(){
//     body.appendChild(div)
//     div.classList.add('circle')
// }

function moveCircle(e){
    const mouseX = e.clientX
    const mouseY = e.clientY
    circle.style.left = mouseX + 'px'
    circle.style.top = mouseY + 'px'

    body.appendChild(div)

    // addimg()
}

window.addEventListener('click', moveCircle)


