const navigation = document.querySelector('header > nav')
const homeMenus = ["home-sub-1", "home-sub-2", "home-sub-3"]      // 서브메뉴 배열
const aboutMenus = ["about-sub-1", "about-sub-2", "about-sub-3"]  // 서브메뉴 배열
const contactMenus = ["contact-sub-1", "contact-sub-2", "contact-sub-3"] // 서브메뉴 배열
const menus = document.querySelectorAll('.menu')
console.log(menus)

for(let menu of menus){
    menu.addEventListener('click', openSubMenu)
}

function openSubMenu(e){
    if(e.target.innerText.includes('home')){
        const divSubMenu = document.createElement('div')
        divSubMenu.className = 'sub-menu'
        menus[0].after(divSubMenu)
        const subMenu = document.querySelector('.sub-menu')

        const ulTag = document.createElement('ul')
        subMenu.appendChild(ulTag)
        const subMenuUl = subMenu.querySelector('ul')

        for(let i=0; i<homeMenus.length; i++){
            const liTag = document.createElement('li')
            const aTag = document.createElement('a')

            aTag.innerText = homeMenus[i]
            subMenuUl.appendChild(liTag).appendChild(aTag)
        }
    }else if(e.target.innerText.includes('about')){
        const divSubMenu = document.createElement('div')
        divSubMenu.className = 'sub-menu'
        menus[1].after(divSubMenu)
        const subMenu = document.querySelector('.sub-menu')
        const ulTag = document.createElement('ul')
        subMenu.appendChild(ulTag)
        const subMenuUl = subMenu.querySelector('ul')

        for(let i=0; i<aboutMenus.length; i++){
            const liTag = document.createElement('li')
            const aTag = document.createElement('a')

            aTag.innerText = aboutMenus[i]
            subMenuUl.appendChild(liTag).appendChild(aTag)
        }
    }else if(e.target.innerText.includes('contact')){
        const divSubMenu = document.createElement('div')
        divSubMenu.className = 'sub-menu'
        menus[2].after(divSubMenu)
        const subMenu = document.querySelector('.sub-menu')
        const ulTag = document.createElement('ul')
        subMenu.appendChild(ulTag)
        const subMenuUl = subMenu.querySelector('ul')

        for(let i=0; i<contactMenus.length; i++){
            const liTag = document.createElement('li')
            const aTag = document.createElement('a')

            aTag.innerText = contactMenus[i]
            subMenuUl.appendChild(liTag).appendChild(aTag)
        }
    }
}






// 