const container = document.querySelector('.container')
const clientHeight = document.documentElement.clientHeight
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  )

function scrollHorizontally(){
    container.scrollLeft = window.pageYOffset * (container.scrollWidth - container.clientWidth) / (scrollHeight - clientHeight)
}

window.addEventListener('scroll', scrollHorizontally)