const fixScrollbar = document.querySelector('.fix-scrollbar')
const moveScrollbar = document.querySelector('.move-scrollbar')


function fixScroll(){
    document.body.style.overflow = "hidden"
}
function moveScroll(){
    document.body.style.overflow = ""
    
}


fixScrollbar.addEventListener('click', fixScroll)
moveScrollbar.addEventListener('click', moveScroll)