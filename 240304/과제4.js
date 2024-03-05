const cardContainer = document.querySelector('.card-container')
const cards = document.querySelectorAll('.card')
const title = document.querySelector('.title')
console.dir(cards)

function cardSilder(){
  for(let card of cards){
    card.classList.add('play')
  }
}

function startCardEvent(){
  cardContainer.style.display = 'flex'
  title.style.display = 'none'
  setTimeout(cardSilder, 10)
}

function sizeUpCard(e){
  console.dir(e.target)
  if(e.target.className.includes('play')){
    e.target.style.flexBasis = '100%'
  }
}

cardContainer.addEventListener('click', sizeUpCard)
window.addEventListener('wheel', startCardEvent)