const pages = document.querySelectorAll('.document')
const agreeBtn = document.querySelector('button')

function checkTheBottomOfScrolling(){
  // 구현하기 
  if(pages[0].scrollTop === 1984 && pages[1].scrollTop === 1984 && pages[2].scrollTop === 1984){
    console.log('다읽음')
    agreeBtn.outerHTML = '<button>동의하기</button>'
  }
}

for(let page of pages){
  page.addEventListener('scroll', checkTheBottomOfScrolling)
}
