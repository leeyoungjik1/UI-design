const circle = document.getElementById('circle')

function moveCircle(e){
    console.log(e.clientX, e.clientY)
    circle.style.left = e.clientX + 'px'
    circle.style.top = e.clientY + 'px'
}


window.addEventListener('mousemove', moveCircle)