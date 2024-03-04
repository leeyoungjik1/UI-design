const main = document.querySelector('main')
const sections = document.querySelectorAll('section')

let timer = 0
let n=0

console.dir(main)
function trotthling(handler, e){
    if(!timer){
      timer = setTimeout(function(){
        handler(e)
        timer = null 
      }, 500)
    }
  }
function show(){
    main.style.display = 'flex'
}
function reset(){
    main.style.left = 0
    n = 0
    main.style.display = 'none'
    setTimeout(show, 10)
}

function changeSlide(){
    n++
    main.style.left = (-100 * n) + 'vw'
    if(n===sections.length-1){
        setTimeout(reset, 1000)
    }
    console.log(n)
    console.log(main.style.left)
}

window.addEventListener('wheel', (e) => trotthling(changeSlide, e))