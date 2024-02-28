const fileInput = document.getElementById('file-input')
const imgBox = document.getElementById('img-box')

function isValid(type){
    console.log(type.split('/')[0])
    return type.split('/')[0] === 'image'
}

function displayImg(e){
    console.log(e.target.files[0])
    const file = e.target.files[0]

    if(!isValid(file.type)){
        imgBox.innerHTML = 'File type not valid! please upload image file'
        return
    }

    const img = document.createElement('img')
    img.src = URL.createObjectURL(file)
    console.log(img.src)
    imgBox.innerHTML = ''
    imgBox.appendChild(img)
}


fileInput.addEventListener('change', displayImg)