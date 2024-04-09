const colorBox = document.querySelector('.color-box')
const colorInput = document.getElementById('color-input')
const colorList = document.querySelector('.color-list')

const colors = ['orange', 'blue', 'brown', 'green', 'red', 'skyblue']

let index = -1
let prevIndex = -1

function addColors(colors){
    for(let color of colors){
        console.log(color)
        const item = `<div class='color-item'>${color}</div>`
        colorList.innerHTML += item
    }
}
function changeHighLightItem(key){
    prevIndex = index
    if(key === 40){
        index++
        if(index > colors.length -1){
            index = 0
        }
    }else if(key === 38){
        index--
        if(index < 0){
            index = colors.length -1
        }
    }else if(key === 13){
        setBackground(colors[index])
    }
    console.log('직전에 선택한 색상: ', prevIndex, colors[prevIndex])
    console.log('현재 선택한 색상: ', index, colors[index])
}
function highLightColorItem(colorIndex){
    if(colorIndex >=0 && colorIndex < colors.length){
        const colorItem = document.querySelectorAll('.color-item')[colorIndex]
        colorItem.classList.add('highlight')
    }
}
function unsetHighLightItem(colorIndex){
    if(colorIndex >=0 && colorIndex < colors.length){
        const colorItem = document.querySelectorAll('.color-item')[colorIndex]
        colorItem.classList.remove('highlight')
    }
}

function selectColor(e){
    console.log(e.keyCode)
    if(e.keyCode){
        changeHighLightItem(e.keyCode)
        unsetHighLightItem(prevIndex)
        highLightColorItem(index)
    }
}

function typeColor(e){
    console.log(e.target.value)

    if(e.target.value !== ''){
        console.log('사용자가 뭔가 입력함')
        colorList.classList.add('show')
        colorInput.addEventListener('keyup', selectColor)
    }else{
        console.log('아무것도 입력 안함')
        colorList.classList.remove('show')
        colorInput.removeEventListener('keyup', selectColor)
    }
}
function initHighlight(){
    unsetHighLightItem(index)
    index = -1
    prevIndex = -1
}
function setBackground(color){
    console.log('선택한 색상: ', color)
    colorInput.value = color
    colorList.classList.remove('show')
    colorBox.style.backgroundColor = color
    initHighlight()
    colorInput.removeEventListener('keyup', selectColor)
}

function setColor(e){
    console.log(e.target.value)
    
    if(e.target.className === 'color-item'){
        const pickedColor = e.target.innerText
        setBackground(pickedColor)
    }
}

addColors(colors)

colorInput.addEventListener('input', typeColor)
colorList.addEventListener('click', setColor)


