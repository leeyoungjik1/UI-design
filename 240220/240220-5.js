const parent = document.querySelector('.parent')
console.log(parent.children)
console.log(parent.childNodes)
console.log(parent.firstElementChild)
console.log(parent.firstChild)
console.log(parent.lastElementChild)
console.log(parent.lastChild)

const img = document.querySelector('#photo')
console.log(img.nextElementSibling)
console.log(img.nextSibling)

const paragraph = document.querySelector('.summary')
// paragraph.style.backgroundColor = 'tan'
// paragraph.style.padding = '15px'
// paragraph.style.width = '300px'
// paragraph.style.heigt = '100px'
// paragraph.style.margin = '100px auto'
// paragraph.style.lineHeight = '100px'
// paragraph.style.textAlign = 'center'
// paragraph.style.color = 'white'
// paragraph.style.fontWeight = 'bold'
// paragraph.style.fontSize = '1.5rem'
// paragraph.style.borderRadius = '15px'

const paragraph2 = document.querySelector('.summary')
paragraph2.classList.add('contents')