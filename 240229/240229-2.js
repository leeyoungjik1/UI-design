const container = document.querySelector('.container')
const items = container.querySelectorAll('.item')
const text = document.body.querySelector('p')
const video = document.querySelector('iframe')
const documentHeihgt = document.documentElement.clientHeight
let offset = -100
let distFromBottom


window.addEventListener('scroll', function(e){
    distFromBottom = documentHeihgt - text.getBoundingClientRect().bottom
    if(distFromBottom > offset){
        text.classList.add('fade')
    }
    for(let item of items){
        distFromBottom = documentHeihgt - item.getBoundingClientRect().bottom
        if(distFromBottom > offset){
            item.classList.add('fade')
        }
    }
    distFromBottom = documentHeihgt - video.getBoundingClientRect().bottom
    if(distFromBottom > offset){
        video.classList.add('fade')
    }
})