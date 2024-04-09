const letter = document.querySelector('.letter')

function hide(){
    letter.style.opacity = '0'
    letter.style.transform = 'scale(1)'
}

function work(){
    console.log('작동')
    letter.style.opacity = '1'
    letter.style.transform = 'scale(1.2)'
    setTimeout(hide, 800)
}

window.addEventListener('click', work)