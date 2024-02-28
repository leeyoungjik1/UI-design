const loginBtn = document.getElementById('login-btn')
const password = document.getElementById('password')
let passwordValue
let reg1 = /^(?=.*?[A-Z])/
let reg2 = /^(?=.*?[a-z])/
let reg3 = /^(?=.*?[0-9])/
let reg4 = /^(?=.*?[#?!@$%^&*-])/
// var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
let checkSafety = document.getElementById('check-safety')
let box = document.createElement('div')

function login(){
    if(ischeckVaule(passwordValue)){
        console.log('로그인 실행')
        // alert('로그인 실행')
    }else{
        // alert('비밀번호를 확인해주세요')
    }
    // console.log(reg.test(passwordValue))
    // console.log(count)
    // console.log([reg1.test(passwordValue), reg2.test(passwordValue), reg3.test(passwordValue),reg4.test(passwordValue)])
}

function ischeckVaule(value){
    return (reg1.test(passwordValue) && reg2.test(passwordValue) && reg3.test(passwordValue) && reg4.test(passwordValue))
}

function typePassword(e){
    passwordValue = e.target.value
    console.log(passwordValue)
    let checkAll = [reg1.test(passwordValue), reg2.test(passwordValue), reg3.test(passwordValue),reg4.test(passwordValue)]
    let count = 0
    for(let i = 0; i<checkAll.length; i++){
        if(checkAll[i] === false){
            count++
        }
        // console.log(checkAll[i])
    }
    if(count === 4 || count === 3){
        checkSafety.innerHTML = ''
        box.className = 'box danger'
        box.innerText = '위험'
        checkSafety.appendChild(box)
    }else if(count === 2 || count === 1){
        checkSafety.innerHTML = ''
        box.className = 'box caution'
        box.innerText = '주의'
        checkSafety.appendChild(box)
    }else if(count === 0){
        checkSafety.innerHTML = ''
        box.className = 'box safe'
        box.innerText = '안전'
        checkSafety.appendChild(box)
    }
    return passwordValue
}

loginBtn.addEventListener('click', login)
password.addEventListener('input', typePassword)