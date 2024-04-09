const form = document.querySelector('form')
const id = document.getElementById('user-id')
const password = document.getElementById('user-password')
const p = document.querySelector('p')

function login(e){
    if(id.value === ''|| password.value === ''){
        e.preventDefault()
        p.innerText = "아이디나 비밀번호가 입력되지 않았습니다."
    }else{
        alert('login is processing')
    }   
}

form.addEventListener('submit', login)