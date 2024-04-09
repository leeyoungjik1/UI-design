const openBtn = document.getElementById('open-btn')
const sidebar = document.querySelector('.sidebar')


function hideSidebar(){
    sidebar.classList.remove('show')
}
function openSidebar(){
    sidebar.classList.add('show')
    setTimeout(hideSidebar, 3000)
}

openBtn.addEventListener('click', openSidebar)