
const circle = document.querySelector('.circle')
const body = document.querySelector('.body')

function moveCircle(e){
    const mouseX = e.clientX
    const mouseY = e.clientY

    const div = document.createElement('div')
    div.classList.add('circle')
    div.style.left = mouseX + 'px'
    div.style.top = mouseY + 'px'
    body.appendChild(div)
}
window.addEventListener('click', moveCircle)