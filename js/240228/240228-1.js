console.log(document.documentElement.clientHeight)
console.log(document.documentElement.clientWidth)

console.log(window.innerHeight)
console.log(window.innerWidth)

console.log('세로 스크롤에 의해 가려진 문서 위쪽 영역의 높이:' + window.pageYOffset)
console.log('가로 스크롤에 의해 가려진 문서 위쪽 영역의 높이:' + window.pageXOffset)

const example = document.getElementById('example')
const button = document.querySelector('button')


function scroll(){
    // example.scrollBy(0,50)
    // example.scrollTo(0,0)
    button.scrollIntoView(false)
}


button.addEventListener('click', scroll)