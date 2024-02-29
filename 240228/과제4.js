const container = document.querySelector('.container')
let halfImgSize = container.getBoundingClientRect().height/2
let startY = container.offsetTop + halfImgSize
console.log(container.getBoundingClientRect().top)


let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  )



function scrollWindow(){
    // console.log(container.getBoundingClientRect().top)
    // console.log(startY)
    // console.log(document.documentElement.offsetTop)
    // console.log(container.top)
    console.log(window.pageYOffset)
    if(container.getBoundingClientRect().top === (container.getBoundingClientRect().bottom-halfImgSize)){
        console.log('실행')
        
    }
    // console.log(document.documentElement.getBoundingClientRect().bottom)
    // console.log(container.getBoundingClientRect().height)
}

window.addEventListener('scroll', scrollWindow)