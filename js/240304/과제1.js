const main = document.querySelector('main')
const sections = document.querySelectorAll('section')
let timer, angle = 0
let index = 0
const speedOfSlide = 0.2


function trotthling(handler, e){   // 100ms 동안 이벤트 금지하기 (자연스러운 슬라이드 효과 연출)
    if(!timer){
      timer = setTimeout(function(){
        handler(e)
        timer = null 
      }, 100)
    }
  }

function initilalizeStyle(section){
    for(let i=0; i<sections.length; i++){
        const section = sections[i]
        section.style.opacity = '0'
        section.style.transform = 'translate(-50%)'
        section.style.transition = 'none'
    }
}

function changeSlide(e){
    console.log('scroll', e.deltaY)

    if(e.deltaY > 0){
        angle += parseInt(e.deltaY * speedOfSlide)
        console.log(angle)

        if(angle > 360){
            angle = 0
            initilalizeStyle(sections)
        }
        if(Math.abs(angle-90) < 20){
            angle += 180
            index++
            if(index > sections.length -1){
                index = 0
            }
            initilalizeStyle(sections)
        }
    }

    const section = sections[index]
    section.style.opacity = '1'
    section.style.transform = `translateX(-50%) rotateX(${angle}deg)`

    setTimeout(function(){
        section.style.transition = '1s ease-in-out'
    }, 50)
}



document.addEventListener('wheel', (e) => trotthling(changeSlide, e))