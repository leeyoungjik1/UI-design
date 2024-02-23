const menuContainer = document.getElementById('menu-container')

function openMenu(e){
  console.log(e.target)
  if(e.target.classList.contains('title')){
    e.target.nextElementSibling.classList.toggle('open')
  }
}


menuContainer.addEventListener('click', openMenu)