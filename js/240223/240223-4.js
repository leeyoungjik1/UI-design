const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

function hideParent(){
  console.log('parent click')
  parent.classList.add('hide')
}
function popup(e){
  e.stopPropagation()
  console.log('child click')
}
function clickbody(){
  console.log('body click')
}


parent.addEventListener('click', hideParent)
child.addEventListener('click', popup)
