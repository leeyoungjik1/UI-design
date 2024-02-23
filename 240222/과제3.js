const boxContainer = document.getElementById('box-container')
const boxs = boxContainer.querySelectorAll('.box')
const boxsLength = boxs.length

for(let [index, box] of boxs.entries()){
    index = 0
    // console.log(index, box)
    function moveBox(){
        console.log(index)
        const activeBox = boxContainer.querySelector('.active')
        if(activeBox){
            activeBox.classList.remove('active')
        }
        if(index > boxsLength - 1){
            index = 0
        }
        boxs[index].classList.add('active')
        index++
        // console.log(index)
        // console.log(boxs[index])
    }
}

function startMove(){
    setInterval(moveBox, 200)
}
window.addEventListener('load', startMove)