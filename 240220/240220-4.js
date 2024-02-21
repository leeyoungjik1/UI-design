const photos = document.querySelectorAll('.photo-item')
console.log(photos)

const imgs = document.querySelectorAll('.photo-item img')
console.log(imgs[0].src)


for(let img of imgs){
    console.log(img)
}


const photos2 = document.getElementsByClassName('photo-item')

for(let photo of photos2){
    console.log(photo)
}

const imgs2 = document.getElementsByTagName('img')

for(let img2 of imgs2){
    console.log(img2)
}


const photos3 = document.querySelectorAll('.photo-item')
console.log(photos3[0].parentElement.parentElement)
console.log(photos3[0].closest('#photo-container'))