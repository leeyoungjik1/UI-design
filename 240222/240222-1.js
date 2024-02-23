// const leds = document.querySelectorAll('.led')

// function lighton(e){
//     e.target.classList.add('on')
// }
// function lightoff(e){
//     e.target.classList.remove('on')
// }

// for(let led of leds){
//     led.addEventListener('mouseover', lighton)
//     led.addEventListener('mouseleave', lightoff)
// }


const ledContainer = document.getElementById('led-container')

function lighton(e){
    // console.log(e.target)
    // console.log(e.target.className)
    if(e.target.className === 'led'){
        e.target.classList.add('on')
    }
}
function lightoff(e){
    console.log(e.target)
    console.log(e.target.className)
    
    const ledon = document.querySelector('.led on')

    
}

ledContainer.addEventListener('mouseover', lighton)
ledContainer.addEventListener('mouseleave', lightoff)