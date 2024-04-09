const box = document.querySelector('.box')
const moves = [
    {pos: 'left', length: 100},
    {pos: 'top', length: 100},
    {pos: 'left', length: 0},
    {pos: 'top', length: 0}
]
let select = 0


function moveBox(){
    console.log(moves[select])
    const pos = moves[select].pos
    const length = moves[select].length
    select++
    box.style[pos] = length + 'px'
    // if(pos === left){
    //     box.style.left = length + 'px'
    // }else if(pos === top){
    //     box.style.top = length + 'px'
    // }
    if(select > moves.length -1){
        select = 0
    }
}
function startMove(){
    setInterval(moveBox, 1000)
}

window.addEventListener('load', startMove)