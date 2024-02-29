const navigation = document.querySelector('header > nav')
const homeMenus = ["home-sub-1", "home-sub-2", "home-sub-3"]      // 서브메뉴 배열
const aboutMenus = ["about-sub-1", "about-sub-2", "about-sub-3"]  // 서브메뉴 배열
const contactMenus = ["contact-sub-1", "contact-sub-2", "contact-sub-3"] // 서브메뉴 배열
const menus = document.querySelectorAll('.menu')
let left
let bottom
let target

for(let menu of menus){
    menu.addEventListener('click', openSubMenu)
}

function addSubMenu(i){
    const divSubMenu = document.createElement('div')
    divSubMenu.className = 'sub-menu'
    menus[i].after(divSubMenu)
    const subMenu = document.querySelector('.sub-menu')
    const ulTag = document.createElement('ul')
    subMenu.appendChild(ulTag)
    subMenu.style.left = left + 'px'
    subMenu.style.top = bottom + 40 + 'px'
}

function openSubMenu(e){
    target = e.target
    left = target.getBoundingClientRect().left
    bottom = target.getBoundingClientRect().bottom
    const subMenu = document.querySelector('.sub-menu')
    if(e.target.innerText.includes('home')){
        if(subMenu === null){
            addSubMenu(0)
            for(let i=0; i<homeMenus.length; i++){
                const subMenu = document.querySelector('.sub-menu')
                const subMenuUl = subMenu.querySelector('ul')
                const liTag = document.createElement('li')
                const aTag = document.createElement('a')
    
                aTag.innerText = homeMenus[i]
                subMenuUl.appendChild(liTag).appendChild(aTag)
            }
        }else if(subMenu !== null){
            const subMenu = document.querySelector('.sub-menu')
            if(e.target.nextElementSibling !== null){
                subMenu.remove()
            }else if(e.target.nextElementSibling === null){
                subMenu.remove()
                addSubMenu(0)
                for(let i=0; i<homeMenus.length; i++){
                    const subMenu = document.querySelector('.sub-menu')
                    const subMenuUl = subMenu.querySelector('ul')
                    const liTag = document.createElement('li')
                    const aTag = document.createElement('a')
        
                    aTag.innerText = homeMenus[i]
                    subMenuUl.appendChild(liTag).appendChild(aTag)
                }
            }
        }
    }else if(e.target.innerText.includes('about')){
        if(subMenu === null){
            addSubMenu(1)
            for(let i=0; i<aboutMenus.length; i++){
                const subMenu = document.querySelector('.sub-menu')
                const subMenuUl = subMenu.querySelector('ul')
                const liTag = document.createElement('li')
                const aTag = document.createElement('a')
    
                aTag.innerText = aboutMenus[i]
                subMenuUl.appendChild(liTag).appendChild(aTag)
            }
        }else if(subMenu !== null){
            const subMenu = document.querySelector('.sub-menu')
            if(e.target.nextElementSibling !== null){
                subMenu.remove()
            }else if(e.target.nextElementSibling === null){
                subMenu.remove()
                addSubMenu(1)
                for(let i=0; i<aboutMenus.length; i++){
                    const subMenu = document.querySelector('.sub-menu')
                    const subMenuUl = subMenu.querySelector('ul')
                    const liTag = document.createElement('li')
                    const aTag = document.createElement('a')
        
                    aTag.innerText = aboutMenus[i]
                    subMenuUl.appendChild(liTag).appendChild(aTag)
                }
            }
        }
    }else if(e.target.innerText.includes('contact')){
        if(subMenu === null){
            addSubMenu(2)
            for(let i=0; i<contactMenus.length; i++){
                const subMenu = document.querySelector('.sub-menu')
                const subMenuUl = subMenu.querySelector('ul')
                const liTag = document.createElement('li')
                const aTag = document.createElement('a')
    
                aTag.innerText = contactMenus[i]
                subMenuUl.appendChild(liTag).appendChild(aTag)
            }
        }else if(subMenu !== null){
            const subMenu = document.querySelector('.sub-menu')
            if(e.target.nextElementSibling !== null){
                subMenu.remove()
            }else if(e.target.nextElementSibling === null){
                subMenu.remove()
                addSubMenu(2)
                for(let i=0; i<contactMenus.length; i++){
                    const subMenu = document.querySelector('.sub-menu')
                    const subMenuUl = subMenu.querySelector('ul')
                    const liTag = document.createElement('li')
                    const aTag = document.createElement('a')
        
                    aTag.innerText = contactMenus[i]
                    subMenuUl.appendChild(liTag).appendChild(aTag)
                }
            }
        }
    }
}

function reLocation(){
    const subMenu = document.querySelector('.sub-menu')
    if(subMenu !== null){
        subMenu.style.left = target.getBoundingClientRect().left + 'px'
    }
}

window.addEventListener('resize', reLocation)