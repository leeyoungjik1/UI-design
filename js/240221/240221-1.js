// const popupBtn = document.getElementById('popup')
// popup.onclick= function(){
//     alert('팝업창')
// }

// function popupcl(){
//     alert('팝업창')
// }

// popup.addEventListener('click', popupcl)

// function setBtnColor(){
//     popup.style.background = 'skyblue'
// }
// function unsetBtnColor(){
//     popup.style.background = ''
// }

// popup.addEventListener('mouseover', setBtnColor)
// popup.addEventListener('mouseout', unsetBtnColor)

// function popup(e){
//     console.log(e)
//     console.log(e.target)

//     e.target.style.all = 'unset'
//     e.target.style.position = 'absolute'
//     e.target.style.left = '500px'
//     e.target.style.width = '200px'
//     e.target.style.height = '70px'
//     e.target.style.textAlign = 'center'
//     e.target.style.background = 'skyblue'
//     e.target.style.borderRadius = '50%'
//     e.target.style.transition = 'all ease 2.5s'
// }

const popupBtn = document.querySelector('.popup')

function popup(e){
    console.log(e)
    console.log(e.target)

    e.target.classList.add('circle')

    // const targetStyle = targetStyle

    // targetStyle.all = 'unset'
    // targetStyle.position = 'absolute'
    // targetStyle.left = '500px'
    // targetStyle.width = '200px'
    // targetStyle.height = '70px'
    // targetStyle.textAlign = 'center'
    // targetStyle.background = 'skyblue'
    // targetStyle.borderRadius = '50%'
    // targetStyle.transition = 'all ease 2.5s'
}

popupBtn.addEventListener('click', popup)