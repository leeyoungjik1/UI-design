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

page.addEventListener('scroll', checkTheBottomOfScrolling)