const box = document.getElementById('box')
const FPS = 30
const gravity = 1
const limitBottom = 500
const limitLeft = 700
const jumpHeight = 50


let vy = 0
let vx = 40
let isDead = false
let isJumping = false
let jumpkey = false


function down(){
    // console.log('down')

    const topStyle = window.getComputedStyle(box).top
    let top = parseInt(topStyle)

    vy += gravity
    top += vy

    if(vy >= jumpHeight){
        jumpkey = false
    }

    if(isDead && top > limitBottom + 700){
        alert('Game over!')
        clearInterval(timerId)
    }

    if(!isDead && !jumpkey && top >= limitBottom){
        top = limitBottom
        vy = 0
        isJumping = true
    }
    // console.log('속도: ', vy)
    box.style.top = top + 'px'
}
const timerId = setInterval(down, 1000/FPS)


function move(e){
    const leftStyle = window.getComputedStyle(box).left
    let left = parseInt(leftStyle)
    console.log(e.keyCode)

    if(e.keyCode === 39){
        box.style.backgroundImage = "url(super-mario-right.jpg)"
        left += vx
        if(left>limitLeft){
            isDead = true
        }
    }else if(e.keyCode === 37){
        box.style.backgroundImage = "url(super-mario-left.jpg)"
        if(left>0){
            left -= vx
        }
    }else if(e.keyCode === 32 || e.keyCode === 38){
        if(isJumping){
            vy = -jumpHeight
            isJumping = false
            jumpkey = true
        }
    }
    box.style.left = left + 'px'
}

window.addEventListener('keydown', move)