/* 문제점 : 클릭을 빠르게 하면 이상하게 동작함 */
/* 쓰로틀링과 디바운싱 적용해서 막아야 할듯 */
/* 첫번째 사진이나 마지막 사진으로 이동하고 100ms 후에 트랜지션 적용하므로 그사이 클릭하면 트랜지션이 먹히지 않음 */
/* 그렇다고 트랜지션을 곧바로 다시 살리면 첫번째 사진이나 마지막 사진으로 이동하면서 트랜지션이 적용되서 이동하는게 보임 */
/* 쓰로틀링 참고자료 : https://www.zerocho.com/category/JavaScript/post/59a8e9cb15ac0000182794fa */

const container = document.querySelector('.container')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const widthOfPhoto = 50, unit = 'vw', duration = 500 // ms


const body = document.querySelector('.body')
const div = document.createElement('div')
div.className = "show"
const expand = document.getElementById('expand')
const boxs = container.querySelectorAll('.box')
const show = document.querySelector('.show')



let index = 1
let timer, throttleDuration = 1000 // 쓰로틀링을 위한 타이머 설정 (1s 이상으로 설정하기 )
let isDown, startX, walk, walk2vw, isOver



function expandImgKey(key){
  if(key === 69){
    console.log('e키')
    expandimg()
  }
}

function selectKey(e){
  console.log(e.keyCode)
  if(e.keyCode){
    expandImgKey(e.keyCode)
  }
}

function expandimg(){
    for(let [index, box] of boxs.entries())
    // console.log(boxs[0])
    index=1
    let id = boxs[index]
    let style = getComputedStyle(id).background
    // console.log(style)
    body.appendChild(div)
    const show = document.querySelector('.show')
    show.classList.add('show')
    show.style.background = (style)

    const closeimg = document.createElement('button')
    closeimg.className = 'close'
    closeimg.innerText = '닫기'
    show.appendChild(closeimg)

    function closePhoto(){
      show.remove()
    }
    function closeImgKey(key){
      if(key === 27){
        console.log('esc키')
        closePhoto()
      }
    }
    function selectKey2(e){
      if(e.keyCode){
        closeImgKey(e.keyCode)
      }
    }
    window.addEventListener('keyup', selectKey2)
    closeimg.addEventListener('click', closePhoto)
}

// 시작점 또는 끝점으로 이동하는 함수
function slideToEnd(container, index, widthOfPhoto, unit, duration){
  setTimeout(function(){ // 마지막 사진 이동 끝남
    container.style.transition = 'none'
    container.style.opacity = '0' // 마지막 사진 가림
    container.style.marginLeft = -1 * index  * widthOfPhoto + unit // 첫번째 사진으로 이동
    container.style.opacity = '1' // 첫번째 사진 보여줌
    
    setTimeout(function(){ // 트랜지션은 나중에 다시 설정하기
      container.style.transition = `${duration}ms  ease-in-out`
    }, 100)
  }, duration)
}

function moveToRight(e){
  index--
  container.style.marginLeft = -1 * index * widthOfPhoto + unit

  if(index === 0){ // 첫번째 사진(마지막사진 복사본) 이동시작 
    index = 5
    slideToEnd(container, index, widthOfPhoto, unit, duration)
  }
}
function moveToLeft(e){
  index++
  container.style.marginLeft = -1 * index  * widthOfPhoto + unit

  if(index === 6){ // 마지막 사진(첫번째사진 복사본) 이동시작 
    index = 1
    slideToEnd(container, index, widthOfPhoto, unit, duration)
  }
}
function throttling(handler){
  if(!timer){
    timer = setTimeout(function(){
      console.log('실행')
      handler()
      timer = null 
    }, throttleDuration)
  }
}

function px2vw(px){  
  return px * 100 / document.documentElement.clientWidth
}

function handleMouseDown(e){
  console.log('down')
  isDown = true 
  startX = e.pageX 
}
function handleMouseUp(){
  console.log('up', isOver)
  isDown = false 

  if(isOver){ // 드래그한 거리가 슬라이드 너비의 절반 이하인 경우
    console.log('못넘음')
    container.style.marginLeft = -1 * index * widthOfPhoto + unit  // 드래그하기전 원래 위치로 되돌아가기 
    isOver = false
  }
}
function handleMouseLeave(){
  console.log('leave')
  isDown = false 
}
function handleMouseMove(e){
  if(!isDown) return 
  console.log('move')

  walk = e.pageX - startX 
  walk2vw = px2vw(Math.abs(walk))
  console.log(walk, walk2vw)

  if(walk < 0){ // 왼쪽 방향으로 드래그한 경우
    if(walk2vw < widthOfPhoto / 2){ // 드래그한 거리가 슬라이드 절반에 못미치는 경우
      console.log('다음사진')
      container.style.marginLeft = `${-1 * index  * widthOfPhoto - walk2vw}vw` // 현재 위치에서 드래그한 거리만큼 왼쪽으로 더 이동
      isOver = true // 절반을 넘지 못한 경우 플래그 ON
    }else{
      throttling(moveToLeft) // 다음사진 보여주기
      isOver = false // 절반을 넘은 경우 플래그 OFF
    }
  }else{ // 오른쪽 방향으로 드래그한 경우
    if(walk2vw < widthOfPhoto / 2){ // 드래그한 거리가 슬라이드 절반에 못미치는 경우
      console.log('이전사진')
      container.style.marginLeft = `${-1 * index  * widthOfPhoto + walk2vw}vw` // 현재 위치에서 드래그한 거리만큼 오른쪽으로 더 이동
      isOver = true // 절반을 넘지 못한 경우 플래그 ON
    }else{
      throttling(moveToRight) // 이전사진 보여주기
      isOver = false // 절반을 넘은 경우 플래그 OFF
    }
  }
}

prev.addEventListener('click', () => throttling(moveToRight))
next.addEventListener('click', () => throttling(moveToLeft))

container.addEventListener('mousedown', handleMouseDown)
container.addEventListener('mousemove', handleMouseMove)
container.addEventListener('mouseup', handleMouseUp)
container.addEventListener('mouseleave', handleMouseLeave)

expand.addEventListener('click', expandimg)
window.addEventListener('keyup', selectKey)