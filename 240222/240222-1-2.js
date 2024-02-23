let index = 0

function lightoff(){
    const led = document.querySelector('.on')
    if(led){
        led.classList.remove('on')
    }
}
function lighton(){
    lightoff()

    const leds = document.querySelectorAll('.led')
    leds[index].classList.add('on')
    index++
    if(index > leds.length -1){
        index = 0
    }
}

function startEffect(){
    setInterval(lighton, 1000)
}

window.addEventListener('load', startEffect)