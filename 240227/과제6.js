const loginBtn = document.getElementById('login-btn')
const password = document.getElementById('password')
let passwordValue
let reg = /^(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
// var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;


function login(){
    if(ischeckVaule(passwordValue)){
        console.log('로그인 실행')
        alert('로그인 실행')
    }else{
        alert('비밀번호를 확인해주세요')
    }
    console.log(reg.test(passwordValue))
}

function ischeckVaule(value){
    console.log(value)
    return reg.test(passwordValue)
}

function typePassword(e){
    passwordValue = e.target.value
}

loginBtn.addEventListener('click', login)
password.addEventListener('input', typePassword)