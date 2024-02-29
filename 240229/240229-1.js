const slider = document.querySelector('.container')
const prevBtn = document.querySelector('.control.before')
const nextBtn = document.querySelector('.control.after')
const margin = 10
const delta = document.querySelector('.item').offsetWidth + margin

let isDown = false
let startX
let currentscrollState

function handleMouseDown(e){
    isDown = true
    slider.classList.add('active')
    console.log('마우스다운')
    startX = e.pageX
    currentscrollState = slider.scrollLeft
}
function handleMouseMove(e){
    if(!isDown) return

    console.log('드래그중')
    const walk = e.pageX - startX
    slider.scrollLeft = currentscrollState - walk
}
function handleMouseUp(e){
    isDown = false
    slider.classList.remove('active')
    console.log('마우스업')
}
function handleMouseLeave(e){
    isDown = false
    slider.classList.remove('active')
    console.log('마우스리브')
}

function moveToLeft(){
    slider.scrollLeft += delta
}
function moveToRight(){
    slider.scrollLeft -= delta
}


prevBtn.addEventListener('click', moveToRight)
nextBtn.addEventListener('click', moveToLeft)
slider.addEventListener('mousedown', handleMouseDown)
slider.addEventListener('mousemove', handleMouseMove)
slider.addEventListener('mouseup', handleMouseUp)
slider.addEventListener('mouseleave', handleMouseLeave)
