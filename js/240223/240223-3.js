const pageContents = []
const numOfData = 92
const limit = 4
const limitPage = 5
const numOfBtns = Math.ceil(numOfData/limit)
let offset = 0

const contents = document.querySelector('.contents')
const pageBtns = document.querySelector('.page-btns')

for(let i=0; i<numOfData; i++){
  pageContents.push({name: 'sunrise', age: 20, id: i})
}

for(let i=offset;i<offset+limitPage && i<numOfBtns;i++){
  const btn = document.createElement('button')
  btn.className = 'page-btn'
  btn.innerText = i + 1

  pageBtns.appendChild(btn)
}

if(numOfBtns>5){
  const btnL = document.createElement('button')
  btnL.className = 'page-btn left'
  btnL.innerText = '◀'
  pageBtns.insertBefore(btnL, pageBtns.firstChild)
  
  const btnR = document.createElement('button')
  btnR.className = 'page-btn right'
  btnR.innerText = '▶'
  pageBtns.appendChild(btnR)

  const btnLeft = document.querySelector('.page-btn.left')

  if(btnLeft.nextElementSibling.innerText === '1'){
    btnLeft.style.display = 'none'
  }
}


for(let i = offset; i<offset+limit; i++){
  const listItem = pageContents[i]
  contents.innerHTML = contents.innerHTML + `
    <div id=${listItem.id} class='list-item'>
      <h3>${listItem.name} (${listItem.id})</h3>
      <h3>${listItem.age}</h3>
    </div>
  `
}

function changePage(e){
  if(e.target.classList.contains('page-btn') && e.target.innerText !== '◀' && e.target.innerText !== '▶'){
    const indexSelected = parseInt(e.target.innerText) - 1
    offset = indexSelected * limit

    contents.innerHTML = ''

    for(let i = offset; i<offset+limit; i++){
      const listItem = pageContents[i]

      contents.innerHTML = contents.innerHTML + `
        <div id=${listItem.id} class='list-item'>
          <h3>${listItem.name} (${listItem.id})</h3>
          <h3>${listItem.age}</h3>
        </div>
      `
    }
  }else if(e.target.innerText === '▶'){
    
    const indexSelected = parseInt(e.target.previousElementSibling.innerText)
    pageBtns.innerHTML = '<button class="page-btn left">◀</button>'

    for(let i=indexSelected;i<indexSelected+limitPage && i<numOfBtns;i++){
      const btn = document.createElement('button')
      btn.className = 'page-btn'
      btn.innerText = i + 1

      pageBtns.appendChild(btn)
    }
    pageBtns.innerHTML += '<button class="page-btn right">▶</button>'
  }else if(e.target.innerText === '◀'){
    const indexSelected = parseInt(e.target.nextElementSibling.innerText)
    pageBtns.innerHTML = '<button class="page-btn left">◀</button>'
 
    for(let i=indexSelected-limitPage;i<indexSelected && i>0;i++){
      const btn = document.createElement('button')
      btn.className = 'page-btn'
      btn.innerText = i

      pageBtns.appendChild(btn)
    }
    pageBtns.innerHTML += '<button class="page-btn">▶</button>'
  }
  const btnRight = document.querySelector('.page-btn.right')
  const btnLeft = document.querySelector('.page-btn.left')

  if(+pageBtns.children[pageBtns.children.length-2].innerText === numOfBtns){
  btnRight.style.display = 'none'
  }
  if(+pageBtns.children[1].innerText === 1){
  btnLeft.style.display = 'none'
  }
}


pageBtns.addEventListener('click', changePage)