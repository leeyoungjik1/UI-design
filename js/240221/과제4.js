const text = 'You are watching text now !'
const text2 = document.querySelector('.text2')


let n = 0
function getTime(){
    n=n+1
    text2.innerHTML = `${text.slice(0,n)}`
    if(text2.innerHTML=='!'){
        clearInterval(timerId)
    }
}
const timerId = setInterval(getTime, 1000)