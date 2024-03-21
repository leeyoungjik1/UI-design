const noticeContainerNpage = document.getElementById('notice-container-npage')
const pageNav = document.getElementById('page-nav')
const pageNavBtnFirst = document.querySelector('.page-nav-btn.first')
const pageNavBtnLeft = document.querySelector('.page-nav-btn.left')
const pageNavBtnRight = document.querySelector('.page-nav-btn.right')
const noticeArr = [
]
const noticeMaxOfPage = 5
const pageNavMaxOfPage = 5

const makeNotice = 18
for(let n=1; n<makeNotice+1; n++){
    const noticeEx = {title: `공지 사항 제목 ${n}`, date: `2024-03-${n}`, constent: `공지사항 ${n}의 내용`}
    noticeArr.push(noticeEx)
}
console.log(noticeArr)

function pushNotice(n){
    const noticeNpageDiv = document.createElement('div')
    noticeNpageDiv.className = 'notice-npage'
    const noticeNpageH2 = document.createElement('h2')
    noticeNpageH2.innerText = noticeArr[n].title
    const noticeNpageP = document.createElement('p')
    noticeNpageP.innerText = noticeArr[n].date
    
    noticeNpageDiv.append(noticeNpageH2, noticeNpageP)
    noticeContainerNpage.appendChild(noticeNpageDiv)
}
function pushNoticePageNav(n){
    let i = Math.ceil(n/pageNavMaxOfPage)

    if(i<=pageNavMaxOfPage){
        for(let n=1; n<i+1; n++){
            const pageNavBtnSelectDiv = document.createElement('div')
            pageNavBtnSelectDiv.className = 'page-nav-btn select'
            pageNavBtnSelectDiv.innerText = `${n}`
            pageNav.insertBefore(pageNavBtnSelectDiv, pageNavBtnRight)
        }
    }else if(i>pageNavMaxOfPage){
        for(let n=1; n<pageNavMaxOfPage+1; n++){
            const pageNavBtnSelectDiv = document.createElement('div')
            pageNavBtnSelectDiv.className = 'page-nav-btn select'
            pageNavBtnSelectDiv.innerText = `${n}`
            pageNav.insertBefore(pageNavBtnSelectDiv, pageNavBtnRight)
        }
    }

}

if(noticeArr.length<=noticeMaxOfPage){
    console.log('작동')
    pageNav.style.display = 'none'
    for(let n=0; n<noticeArr.length; n++){
        pushNotice(n)
    }
}else if(noticeArr.length>noticeMaxOfPage){
    pageNavBtnFirst.style.display = 'none'
    pageNavBtnLeft.style.display = 'none'
    pushNoticePageNav(noticeArr.length)
    for(let n=0; n<noticeMaxOfPage; n++){
        pushNotice(n)
    }
}
