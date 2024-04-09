const example = document.getElementById('example')
const button = document.querySelector('button')

function increaseHeight(){
    example.style.height = example.scrollHeight + 'px'
    button.removeEventListener('click', increaseHeight)
}


function isHidden(elem){
    return !elem.offsetWidth && !elem.offsetHeight
}


console.log(getComputedStyle(example).height)
console.log(getComputedStyle(example).width)
console.log(example.offsetLeft)

if(isHidden(example)){
    console.log('화면에 해당요소가 보이지 않습니다.')
}

function moveScrollbar(){
    example.scrollTop = 0
}

button.addEventListener('click', moveScrollbar)