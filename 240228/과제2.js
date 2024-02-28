const btnContainer = document.querySelector('.btn-container')
const boxContainers = document.querySelectorAll('.box-container')

let i=0
function scrollToBox(e){
    if(e.target.className.includes('next') && i<boxContainers.length){
        console.log('다음')
        boxContainers[i].scrollIntoView({behavior: "smooth"})
        i++
    }else if(e.target.className.includes('prev') && i>=2){
        console.log('이전')
        boxContainers[i-2].scrollIntoView({behavior: "smooth"})
        i--
    }
    console.log(i)
}

btnContainer.addEventListener('click', scrollToBox)