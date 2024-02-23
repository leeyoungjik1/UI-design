const openBtn = document.getElementById('open-btn')
const sidebar = document.querySelector('.sidebar')
const menus = document.querySelectorAll('.menu')

function openSidebar(e){
    e.stopPropagation()
    sidebar.classList.add('show')
}
function closeSidebar(e){
    console.log('브라우저영역 클릭')
    console.log(sidebar.classList.contains('show'))
    console.log(sidebar.contains(e.target))

    if(sidebar.classList.contains('show') && !sidebar.contains(e.target)){
        sidebar.classList.remove('show')
    }
    // if(sidebar.classList.contains('show') && sidebar.contains(e.target)){
    //     sidebar.classList.remove('show')
    // }
}
function hideSidebar(){
    sidebar.classList.remove('show')
}


openBtn.addEventListener('click', openSidebar)
document.addEventListener('click', closeSidebar)

for(let menu of menus){
    menu.addEventListener('click', hideSidebar)
}