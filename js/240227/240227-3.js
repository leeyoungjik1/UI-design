const prev = document.getElementById('prev')
const next = document.getElementById('next')
const cardContainer = document.getElementById('card-container')

function moveToLeft(){
    const cards = cardContainer.querySelectorAll('.card')
    setTimeout(function(){
        cards[0].style.opacity = '0'
        cardContainer.removeChild(cards[0])
        cardContainer.appendChild(cards[0])
        setTimeout(function(){
            cards[0].style.opacity = '1'
        }, 100)
    }, 150)
}
function moveToRight(){
    const cards = cardContainer.querySelectorAll('.card')
    setTimeout(function(){
        cardContainer.removeChild(cards[cards.length-1])
        cardContainer.insertBefore(cards[cards.length-1], cardContainer.childNodes[0])
    }, 150)
}

prev.addEventListener('click', moveToRight)
next.addEventListener('click', moveToLeft)