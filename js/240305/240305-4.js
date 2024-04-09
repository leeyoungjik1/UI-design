const links = document.querySelectorAll('.page-link')
const root = document.querySelector('.root')

const pages = {
  home: "<h1>Home page</h1><button class='detail-link'>detail</button>",
  about: "<h1>About page</h1>",
  contact: "<h1>Contact page</h1>",
  detail: "<h1>Detail page</h1><button class='order-link'>order</button>",
  order: "<h1>Order page</h1>"
}

function addEvent(currentPage){
  if(currentPage === 'home'){
    const detailLink = document.querySelector('.detail-link')
    detailLink.addEventListener('click', storePageInfo)
  }else if(currentPage === 'detail'){
    const orderLink = document.querySelector('.order-link')
    orderLink.addEventListener('click', storePageInfo)
  }
}

function storePageInfo(e){
  console.log("현재 페이지: ", e.target.innerText)
  const currentPage = e.target.innerText
  history.pushState({'page_title': currentPage}, '', `/${currentPage}`)
  root.innerHTML = pages[currentPage]
  addEvent(currentPage)
}

for(let link of links){
  link.addEventListener('click', storePageInfo)
}


window.onpopstate = function(e){
  console.log(e.state)
  if(e.state === null){
    root.innerHTML = ''
    return;
  }
  root.innerHTML = pages[e.state.page_title]
  addEvent(e.state.page_title)
}