// const click = document.querySelectorAll('.box')
// console.log(click)

// function setBtnColor(e){
//     console.log(e)
//     console.log(e.target.className)
//     let 빨간색 = Math.floor(Math.random()*256)
//     let 초록색 = Math.floor(Math.random()*256)
//     let 파란색 = Math.floor(Math.random()*256)
//     e.target.style.background = `rgb(${빨간색} , ${초록색}, ${파란색})`
// }

// click.addEventListener('click', setBtnColor)


const container = document.querySelector('.container')

function setBtnColor(e){
    let 빨간색 = Math.floor(Math.random()*256)
    let 초록색 = Math.floor(Math.random()*256)
    let 파란색 = Math.floor(Math.random()*256)
    e.target.style.background = `rgb(${빨간색} , ${초록색}, ${파란색})`
}

container.addEventListener('click', setBtnColor)