const photoContainer = document.getElementById('photo-container')
const photos = document.getElementById('photos')
const widthOfphoto = 500
let marginLeft = widthOfphoto
let timerId = null

function changeIndicator(index){
    const selection = document.getElementById('selection')
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
    const photosLength = photos.querySelectorAll('.photo').length
    photos.style.marginLeft = marginLeft * -1 + 'px'
    const index = parseInt(marginLeft / widthOfphoto)
    changeIndicator(index)
    marginLeft = marginLeft >= (widthOfphoto * (photosLength-1)) ? 0 : marginLeft + widthOfphoto
}

function startCarousel(){
    timerId = setInterval(changePosition, 1000)
}
function stopCarousel(){
    clearInterval(timerId)
}

photoContainer.addEventListener('mouseenter', startCarousel)
photoContainer.addEventListener('mouseleave', stopCarousel)