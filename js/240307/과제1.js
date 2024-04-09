const userName = document.getElementById('user-name') // 사용자 이름 입력창
const userEmail = document.getElementById('user-email') // 사용자 연락처 입력창
const userAge = document.getElementById('user-age') // 사용자 나이 입력창
const userList = document.getElementById('user-list') // 사용자 리스트 출력 위치

const submitBtn = document.getElementById('user-add') //  사용자 추가 버튼
const users = [] // 사용자 리스트 배열

// 입력창 유효성 검증
function isValid(str){
    return str !== '' && str !== undefined
}

// user 정보로부터 user 에 대한 DOM 객체 생성 및 반환
function buildElement(){
    if(isValid(userName.value) && isValid(userAge.value) && isValid(userEmail.value)){
        const userEl = document.createElement('div')
            // 구현하기
        userEl.className = 'user'
        userEl.innerText = 
        `name : ${userName.value}
        age : ${userAge.value}
        email : ${userEmail.value}`
        return users.push(userEl)
    }else{
        alert('오류')
    }
}
// users 배열을 이용하여 화면에 사용자 리스트 보여주기
function displayUsers(users){
	// 구현하기
    userList.appendChild(users)
}

// 입력창 초기화
function initInput(){
    userName.value = ''
    userEmail.value = ''
    userAge.value = ''
}

// 사용자 추가하기
function addUser(){
	// 구현하기
    buildElement()
    users.forEach(displayUsers)
    initInput()
}
submitBtn.addEventListener('click', addUser)