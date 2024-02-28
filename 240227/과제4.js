const fileInput = document.getElementById('file-input')
const progressIndicator = document.querySelector('.progress-indicator')
const progressNumber = document.querySelector('.progress-number')
const uploadBtn = document.getElementById('upload-btn')

function upload(){
    fileInput.click()
}

function handleFileUpload(e){
    const file = e.target.files[0]

    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onloadstart = function(){
        console.log('파일을 읽기 시작할때 실행되는 이벤트핸들러 함수')
    }
    fileReader.onprogress = function(e){
        console.log('파일을 읽는 중에 실행되는 이벤트핸들러 함수')
        console.log('파일 업로드 진행률: ', e.loaded / e.total * 100)
        const progress = parseInt(e.loaded / e.total * 100) + '%'
        progressIndicator.style.width = progress
        progressNumber.innerText = progress
    }
    fileReader.onloadend = function(finishedEvent){
        console.log('파일 읽기가 방금 끝났을 때 실행되는 이벤트핸들러 함수')
    }
    fileReader.onload = function(e){
        console.log('읽어들인 파일 데이터를 조회할때 실행되는 이벤트핸들러 함수')
    }
}


uploadBtn.addEventListener('click', upload)
fileInput.addEventListener('change', handleFileUpload)