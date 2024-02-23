const photoContainer = document.getElementById('photo-container')
const photosLength = photos.querySelectorAll('.photo').length
const selection = document.getElementById('selection')
const photos = document.getElementById('photos')
const widthOfphoto = 500
let timerId = null
let index = 0

function changeIndicator(index){
    const activeOption = selection.querySelector('.active')
    if(activeOption){
        activeOption.classList.remove('active')
    }

    selection.querySelectorAll('.options')[index].classList.add('active')
}

function changePosition(){
    // console.log(marginLeft)
    // if(marginLeft === 0){
    //     photos.style.display = 'none'
    //     setTimeout(function(){
    //         photos.style.display = 'flex'
    //     }, 100)
    // }
    index++
    if(index > photosLength - 1){
        index = 0
    }

    photos.style.marginLeft = index * widthOfphoto * -1 + 'px'
    changeIndicator(index)
}

function startCarousel(){
    timerId = setInterval(changePosition, 1000)
}
function stopCarousel(){
    clearInterval(timerId)
}

photoContainer.addEventListener('mouseenter', startCarousel)
photoContainer.addEventListener('mouseleave', stopCarousel)