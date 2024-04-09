// function multiplyXtimes(x){
//     function multiply(y){
//         return x * y
//     }
//     return multiply
// }

// const multiply3times = multiplyXtimes(3)

// console.log(multiply3times(4))
// console.log(multiply3times(13))

// const multiply5times = multiplyXtimes(5)

// console.log(multiply5times(4))
// console.log(multiply5times(13))



// function initCount(){
//     let _cnt = 0
//     function _updateCount(diff){
//         _cnt += diff
//     }
//     return {
//         increaseCount(){
//             _updateCount(1)
//         },
//         decreaseCount(){
//             _updateCount(-1)
//         },
//         get cnt(){
//             return _cnt
//         }
//     }
// }

// const counter1 = initCount()
// const counter2 = initCount()
// const counter3 = initCount()

// counter1.increaseCount()
// console.log(counter1.cnt)




// const Component = (function(){
//     const _name = ""

//     function _setAttributes(el, attrs){
//         if(attrs === undefined || attrs === null || Object.keys(attrs).length === 0) return;

//         for(let prop in attrs){
//             el.setAttribute(prop, attrs[prop])
//         }
//     }
//     function _setValues(el, values){
//         if(values === undefined || values === null || values.length === 0) return

//         el.innerHTML = ""
//         values.map(function(value){
//             el.append(value)
//         })
//     }

//     const create = function(tag, attrs, values){
//         const el = document.createElement(tag)
//         _setAttributes(el, attrs)
//         _setValues(el, values)
//         return el
//     }
//     const update = function(selector, attrs, values){
//         const targetEl = document.querySelector(selector)
//         if(!targetEl) return;
//         _setAttributes(targetEl, attrs)
//         _setValues(targetEl, values)
//         return targetEl
//     }

//     return {
//         create,
//         update,
//         get name(){
//             return _name
//         },
//         set name(value){
//             _name = value
//         }
//     }
// })()


// const mainDiv = Component.create("div", {class: "main"}, [
//     Component.create("h1", {class: "title"}, ["main page"]),
//     Component.create("textarea", { class: "text-area" })
// ])

// console.log(mainDiv)
// mainDiv.name = "main page"
// console.log(mainDiv.name)





// const popupBtns = document.querySelectorAll('.popup')

// function addPopupEvents(){
//     for(let i=0; i<popupBtns.length; i++){
//         console.log(popupBtns[i])
//         popupBtns[i].onclick = function(){
//             alert(i)
//         }
//     }
// }
// addPopupEvents()






// const fruits = ["apple", "banana", "orange"]


// const _ = (function(){
//     const _ = {}
//     _.getFruits = function(){
//         return this._fruits
//     }
//     _.setFruits = function(fruits){
//         this._fruits = fruits
//     }

//     return _
// })()

// _.setFruits(fruits)
// console.log(_.getFruits()) 



// const products = ["paper", "cosmetic", "coke"]

// const $ = (function(){
//     const _ = {}
//     _.getProducts = function(){
//         return this._products
//     }
//     _.setProducts = function(products){
//         this._products = products
//     }

//     return _
// })()



// $.setProducts(products)
// console.log($.getProducts())




function factorial(n){
    console.log('fact!', n)
}