const instantMsg = document.querySelector('.instant-msg')

function showMsg(){
    instantMsg.classList.add('show')
}
function hideMsg(){
    instantMsg.classList.remove('show')
}

setTimeout(showMsg, 1000)
setTimeout(hideMsg, 3000)
