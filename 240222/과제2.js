const photoContainer = document.getElementById('photo-container')
const photos = document.getElementById('photos')
const photosLength = photos.querySelectorAll('.photo').length
const selection = document.getElementById('selection')
const selectionLength = selection.querySelectorAll('.options').length
const options = selection.querySelectorAll('.options')

const widthOfphoto = 500
let timerId = null
let index = 0


for(const [i, option] of options.entries()){
    // console.log(i, option);
    option.addEventListener('click', showPhoto)
    option.addEventListener('click', changeIndicator2)
    function showPhoto(){
        photos.style.marginLeft = i * widthOfphoto * -1 + 'px'
    }
    function changeIndicator2(){
        const activeOption = selection.querySelector('.active')
        if(activeOption){
            activeOption.classList.remove('active')
        }
        options[i].classList.add('active')
    }
}


function changeIndicator(index){
    const activeOption = selection.querySelector('.active')
    if(activeOption){
        activeOption.classList.remove('active')
    }

    selection.querySelectorAll('.options')[index].classList.add('active')
}

function changePosition(){
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
