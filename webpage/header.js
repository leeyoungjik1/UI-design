const mainMenus = document.querySelectorAll('.main-menu')
const subMenuInfo = document.querySelector('.sub-menu.info')
const subMenuIntro = document.querySelector('.sub-menu.intro')
const subMenuEvent = document.querySelector('.sub-menu.event')
const subMenuNews = document.querySelector('.sub-menu.news')
const iconSitemap = document.querySelector('.icon.sitemap')
const iconSearch = document.querySelector('.icon.search')
const searchbar = document.getElementById('searchbar')

function showSubMenu(e){
    // console.log(e.target.innerText)
    if(e.target.innerText.includes('이용 안내')){
        subMenuInfo.style.top = 100 + 'px'
    }else if(e.target.innerText.includes('관광지 소개')){
        subMenuIntro.style.top = 100 + 'px'
    }else if(e.target.innerText.includes('행사')){
        subMenuEvent.style.top = 100 + 'px'
    }else if(e.target.innerText.includes('소식')){
        subMenuNews.style.top = 100 + 'px'
    }
}
function hideSubMenu(){
    subMenuInfo.style.top = -109 + 'px'
    subMenuIntro.style.top = 35 + 'px'
    subMenuEvent.style.top = -13 + 'px'
    subMenuNews.style.top = 35 + 'px'
}

for(let mainMenu of mainMenus){
    mainMenu.addEventListener('mouseenter', showSubMenu)
    mainMenu.addEventListener('mouseleave', hideSubMenu)
}

function showSitemap(){
    let isSitemap = false
    function sitemap(){
        if(!isSitemap){
            iconSitemap.style.backgroundImage = 'url(img/8666595_x_icon.png)'
            subMenuInfo.style.top = 100 + 'px'
            subMenuIntro.style.top = 100 + 'px'
            subMenuEvent.style.top = 100 + 'px'
            subMenuNews.style.top = 100 + 'px'
            for(let mainMenu of mainMenus){
                mainMenu.removeEventListener('mouseenter', showSubMenu)
                mainMenu.removeEventListener('mouseleave', hideSubMenu)
            }
            isSitemap = true
        }else if(isSitemap){
            iconSitemap.style.backgroundImage = 'url(img/8666802_menu_navigation_icon.png)'
            hideSubMenu()
            for(let mainMenu of mainMenus){
                mainMenu.addEventListener('mouseenter', showSubMenu)
                mainMenu.addEventListener('mouseleave', hideSubMenu)
            }
            isSitemap = false
        }
        return isSitemap
    }
    return sitemap
}


function showSearchbar(){
    let isSearchbar = false
    function search(){
        if(!isSearchbar){
            searchbar.style.display = 'block'
            iconSearch.style.backgroundImage = 'url(img/8666595_x_icon.png)'
            iconSearch.style.zIndex = '2'
            isSearchbar = true
        }else if(isSearchbar){
            searchbar.style.display = 'none'
            iconSearch.style.backgroundImage = 'url(img/8666693_search_icon.png)'
            iconSearch.style.zIndex = '0'
            isSearchbar = false
        }
        return isSearchbar
    }
    return search
}


iconSearch.addEventListener('click', showSearchbar())
iconSitemap.addEventListener('click', showSitemap())