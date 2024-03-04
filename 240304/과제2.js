const paragraph = document.querySelector('pre')
const text = paragraph.innerText
let isStarted = false
const scrollbarwidth = 50
const maxFontSize = 30
const widthOfBrowser = document.documentElement.clientWidth - (maxFontSize + scrollbarwidth)
let timer

function pickRandomNumber(n){
    return Math.floor(Math.random() * n)
}
function pickRandomLetter(text){
    const randomIndex = pickRandomNumber(text.length)
    return text[randomIndex]
}

function createLetter(text, left, top){
    // console.log('creating letter...')
    const span = document.createElement('span')
    span.className = 'letter'
    span.style.left = left + 'px'
    span.style.fontSize = pickRandomNumber(maxFontSize) + 'px'
    span.innerText = pickRandomLetter(text)
    if(top) span.style.top = top + 'px'
    return span
}
function hide(letter){

    setTimeout(hide, 100)

}
function displayLetter(){
    if(timer) clearTimeout(timer)
    
    const letter = createLetter(text, pickRandomNumber(widthOfBrowser))
    document.body.appendChild(letter)
    
     setInterval(() => {
        letter.style.top = letter.offsetTop + 10 + 'px'
        const cloneLetter = createLetter(text, letter.offsetLeft, letter.offsetTop)
            document.body.appendChild(cloneLetter)
            letter.style.transform = 'scale(1.3)'
            letter.style.opacity = '0'
            setInterval(()=> {
                cloneLetter.style.transform = 'scale(1.3)'
                setInterval(()=> {
                    cloneLetter.style.transform = 'scale(1.0)'
                    cloneLetter.style.opacity = '0'
                }, 50)
            }, 20)
            
        }, 50)
    timer = setTimeout(displayLetter, 300)

}

function startAnimation(){
    if(!isStarted){
        console.log('애니메이션 시작!')
        isStarted = true

        paragraph.innerText = ''
        timer = setTimeout(displayLetter, 100)

    }
}


window.addEventListener('wheel', startAnimation)