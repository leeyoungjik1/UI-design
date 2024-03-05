const fileInput = document.getElementById('file-input')
const imgBox = document.getElementById('img-box')

function isValid(type){
    return type.split('/')[0] === 'image'
}
function rememberImg(e){
    console.log(e.target.result)
    localStorage.setItem('file', JSON.stringify(e.target.result))
}

function displayImg(src){
    imgBox.innerHTML = `<img src='${src}'/>`
}
function uploadImg(e){
    const file = e.target.files[0]
    const reader = new FileReader()


    if(!isValid(file.type)){
        imgBox.innerHTML = 'File type not valid!'
        return;
    }
    const src = URL.createObjectURL(file)
    displayImg(src)

    reader.onload = rememberImg
    reader.readAsDataURL(file)
}
function renderImg(){
    const fileStored = JSON.parse(localStorage.getItem('file'))
    if(fileStored) displayImg(fileStored)
}


fileInput.addEventListener('change', uploadImg)
window.addEventListener('load', renderImg)