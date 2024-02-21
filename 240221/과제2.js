const pic = document.querySelector('.pic')

function showPic(){
    pic.classList.add('show')
}
function hidePic(){
    pic.classList.remove('show')
}

setTimeout(showPic, 1000)
setTimeout(hidePic, 3000)