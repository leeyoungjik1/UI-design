const page = document.querySelector('.document')
const agreeBtn = document.querySelector('button')

console.log(page.scrollTop)
console.log(page.scrollHeight)
console.dir(agreeBtn)

function checkTheBottomOfScrolling(){
  // 구현하기 
  console.log(page.scrollTop)
  if(page.scrollTop === 1984){
    console.log('다읽음')
    agreeBtn.outerHTML = '<button>동의하기</button>'
  }
}

function changeScroll(key){
  // console.log('작동')
  if(key === 38){
    // console.log('위키')
    page.scrollTop -= 10
  }
  if(key === 40){
    // console.log('아래키')
    page.scrollTop += 10
  }
}

function keySelect(e){
  // console.log(e.keyCode)
  if(e.keyCode){
    changeScroll(e.keyCode)
  }
}

page.addEventListener('scroll', checkTheBottomOfScrolling)
window.addEventListener('keyup', keySelect)