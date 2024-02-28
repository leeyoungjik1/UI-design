const container = document.querySelector('.container')

function scrollToItem(e){
    if(e.target.classList.contains('item')){
        e.target.scrollIntoView({behavior: "smooth", inline: "center"})
    }
}


container.addEventListener('click', scrollToItem)