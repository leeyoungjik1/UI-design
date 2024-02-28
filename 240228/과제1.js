const noticeBox = document.querySelector('.notice-box')
const bodyDark = document.getElementById('body-dark')
const btns = document.getElementById('btns')


function close(e){
    console.log(e.target)
    if(e.target.className.includes('btn')){
        console.log('작동')
        bodyDark.style.opacity = '0'
        noticeBox.style.opacity = '0'
        document.body.style.overflow = ""
    }
}


btns.addEventListener('click', close)
window.setTimeout(function(){
    bodyDark.style.opacity = '1'
    noticeBox.style.opacity = '1'
    document.body.style.overflow = "hidden"
} ,1000)