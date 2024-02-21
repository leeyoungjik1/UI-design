// const div = document.createElement('div')
// div.className = "parent"
// div.innerText = "Hello world!"

// const img = document.createElement('img')
// img.className = "child"
// img.src = "http://127.0.0.1:5500"
// img.alt = "photo"

// const p = document.createElement('p')
// p.className = "summary"
// p.innerText = "this is summary!"

// // div.appendChild(img)
// // div.appendChild(p)
// div.append(img,p)


// console.log(div)


// const div = document.createElement('div')
// div.className = "parent"

// div.innerHTML = `
//                 "Hello world!"
//                 <img class="child src="http://127.0.0.0:5500" alt="photo">
//                 <p class="summary">this is summary!</p>
// `

// console.log(div)


// const div = document.createElement('div')
// div.className = "child"
// div.innerText = "Hello world!"

// const root = document.getElementById('root')
// root.appendChild(div)


// const img = document.getElementById('photo')
// console.log(img)


const div = document.createElement('div')
div.className = "parent"
div.innerText = "Hello world!"

const img = document.createElement('img')
img.id = "photo"
img.src = "http://127.0.0.1:5500"
img.alt = "photo"

const p = document.createElement('p')
p.className = "summary"
p.innerText = "this is summary!"

div.appendChild(img)
div.appendChild(p)


// const photo = document.getElementById('photo')
// console.log(photo)

// const root = document.getElementById('root')
// root.appendChild(div)

// const photo2 = document.getElementById('photo')
// console.log(photo2)

const photo = document.querySelector('#photo')
console.log(photo)

const root = document.getElementById('root')
root.appendChild(div)

const photo2 = document.querySelector('#photo')
console.log(photo2)