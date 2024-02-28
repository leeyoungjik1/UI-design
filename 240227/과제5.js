const fileInput = document.getElementById('file-input')
const imgBox = document.getElementById('img-box')
const uploadBtn = document.getElementById('upload-btn')

function upload(){
    fileInput.click()
}

function isValid(type){
    console.log(type.split('/')[0])
    return type.split('/')[0] === 'image'
}

function displayImg(e){
    console.dir(e.target.files.length)
    imgBox.innerHTML = ''
    for(let index = 0; index<e.target.files.length; index++){
        let file = e.target.files[index]
        const img = document.createElement('img')
        img.src = URL.createObjectURL(file)
        console.log(img.src)
        imgBox.appendChild(img)

        if(!isValid(file.type)){
            imgBox.innerHTML = 'File type not valid! please upload image file'
            return
        }
    }


}

uploadBtn.addEventListener('click', upload)
fileInput.addEventListener('change', displayImg)