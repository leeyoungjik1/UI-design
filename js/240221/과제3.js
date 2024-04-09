const count = document.querySelector('.count')

let num = 0
function getTime(){
    num=num+1
    console.log(num)
    count.innerHTML = `${num}`
}

setInterval(getTime, 1000)