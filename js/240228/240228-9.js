const container = document.querySelector('.container')
const items = document.querySelectorAll('.item')

const clientHeight = document.documentElement.clientHeight

const Radius = 350

let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
)

function scrollCircle(){
  container.style.transform = `translate(-50%, -50%) rotate(${window.pageYOffset / (scrollHeight - clientHeight) * 360}deg)`
}
function degToRad(deg){
  return deg * (Math.PI/180)
}

function setPosition(xc, yc, R, delta){
  const radian = degToRad(delta)
  return [R*Math.cos(radian)+xc, R*Math.sin(radian)+yc]
}

function changeCenter(){
  const coords = container.getBoundingClientRect()
  const xcenter = coords.width/2
  const ycenter = coords.height/2
  return [xcenter, ycenter]
}

function circleItems(){
  const [xcenter, ycenter] = changeCenter()
  for(let i=0; i<items.length; i++){
    const [x, y] = setPosition(xcenter, ycenter, Radius, 360/items.length * (i+1))
    items[i].style.left = x + 'px'
    items[i].style.top = y + 'px'
  }
}

circleItems()
window.addEventListener('scroll', scrollCircle)
window.addEventListener('resize', circleItems)