const pageContents = []
const numOfData = 100
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
  const btnLeft = document.createElement('button')
  btnLeft.className = 'page-btn'
  btnLeft.innerText = '◀'
  pageBtns.insertBefore(btnLeft, pageBtns.firstChild)
  
  const btnRight = document.createElement('button')
  btnRight.className = 'page-btn'
  btnRight.innerText = '▶'
  pageBtns.appendChild(btnRight)
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
    pageBtns.innerHTML = '<button class="page-btn">◀</button>'

 
    for(let i=indexSelected;i<indexSelected+limitPage && i<numOfBtns;i++){
      const btn = document.createElement('button')
      btn.className = 'page-btn'
      btn.innerText = i + 1

      if((indexSelected)>(numOfBtns-limitPage+1)){
        // console.log(indexSelected)
        // console.log(numOfBtns)
        // console.log(limitPage)
        // console.log('a')
      }
      pageBtns.appendChild(btn)
    }
    pageBtns.innerHTML += '<button class="page-btn">▶</button>'
  }else if(e.target.innerText === '◀'){
    console.dir(e.target)
    const indexSelected = parseInt(e.target.nextElementSibling.innerText)
    console.log(indexSelected)
    pageBtns.innerHTML = '<button class="page-btn">◀</button>'
    console.log(e.target)

 
    for(let i=indexSelected-limitPage;i<indexSelected && i>0;i++){
      const btn = document.createElement('button')
      btn.className = 'page-btn'
      btn.innerText = i
      console.log(indexSelected)
      console.log(numOfBtns-limitPage)

      if((indexSelected)>(numOfBtns-limitPage+1)){
        console.log(indexSelected)
        console.log(numOfBtns)
        console.log(limitPage)
        console.log('a')
      }
      pageBtns.appendChild(btn)
    }
    pageBtns.innerHTML += '<button class="page-btn">▶</button>'
  }
}

pageBtns.addEventListener('click', changePage)