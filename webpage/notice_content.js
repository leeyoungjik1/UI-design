import { noticeArr } from "./data.js"
const titleNcpage = document.querySelector('.title-ncpage')
const contentNcpage = document.querySelector('.content-ncpage')
const dateNcpage = document.querySelector('.date-ncpage')

const selectedNoticeIdNum = window.location.search.split('?')[1].split('=')[1]
const selectedNotice = noticeArr[selectedNoticeIdNum-1]
console.log(noticeArr)
console.log(selectedNoticeIdNum)

titleNcpage.innerText = selectedNotice.title
contentNcpage.innerText = selectedNotice.content
dateNcpage.innerText = selectedNotice.date

