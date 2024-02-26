const colorBox = document.querySelector('.color-box')
const colorInput = document.getElementById('color-input')
console.log(colorInput)

function setColor(e){
    console.log(e.target.value)
      let 빨간색 = Math.floor(Math.random()*256)
      let 초록색 = Math.floor(Math.random()*256)
      let 파란색 = Math.floor(Math.random()*256)
      colorBox.style.background = `rgb(${빨간색} , ${초록색}, ${파란색})`

}

colorInput.addEventListener('input', setColor)

