const main = document.querySelector('main')
const sections = main.querySelectorAll('section')
let index = 0, timer

function throttling(handler, e){
    if(!timer){
        timer = setTimeout(function(){
            handler(e)
            timer = null
        }, 1000)
    }
}



function changeSlide(e){
    console.log('scroll', e.deltaY)
    if(e.deltaY>0){
        index++
        if(index > sections.length - 1) index = 0
    }else{
        index--
        if(index<0) index = sections.length - 1
    }
    console.log(index)
    for(let i=0; i<sections.length; i++){
        if(index !== i){
            const section = sections[i]
            section.style.transition = 'none'
            setTimeout(function(){
                
                console.log(i, section)
                section.style.opacity = '0'
                section.style.height = '0'
                section.style.transition = '1s ease-in-out'
            }, 1000)
        }
    }
    const section = sections[index]
    section.style.opacity = '1'
    section.style.height = '100vh'
}

window.addEventListener('wheel', (e) => throttling(changeSlide, e))