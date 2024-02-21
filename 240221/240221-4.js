const container = document.querySelector('.container')

function removeItem(e){
    console.log(e.target)
    console.log(e.target.className)

    if(e.target.className === ''){
        const box = e.target.parentElement
        box.classList.add('fadeOut')
        setTimeout(() => {
            box.classList.add('hide')
        }, 300);
    }
}

container.addEventListener('click', removeItem)
