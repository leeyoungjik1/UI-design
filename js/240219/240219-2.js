// let accessAllowed
// let age = prompt('나이를 입력해주세요.', '')

// if(age>18){
//     accessAllowed = true
// } else {
//     accessAllowed = false
// }

// alert(accessAllowed)




// let age = prompt('나이를 입력해주세요.', '')
// let accessAllowed = (age > 18) ? '접근권한이 있습니다.':'접근권한이 없습니다.'

// alert(accessAllowed)





// let age = prompt('나이를 입력해주세요.', 18)

// let message = (age<3) ? '아기야 안녕?' :
//     (age<18) ? '안녕!' :
//     (age<100) ? '환영합니다!' :
//     '나이가 아주 많으시거나, 나이가 아닌 값을 입력하셨군요!'

// alert(message)


// let age = prompt('나이를 입력해주세요.', 18)
// let message

// if (age<3){
//     message='아기야 안녕?'
// } else if (age<18){
//     message='안녕!'
// } else if (age<100){
//     message='환영합니다!'
// } else {
//     message='나이가 아주 많으시거나, 나이가 아닌 값을 입력하셨군요!'
// }

// alert(message)



// let a = 2+2

// switch(a){
//     case 3:
//         alert('비교하려는 값보다 작습니다.')
//         break
//     case 4:
//         alert('비교하려는 값과 일치합니다.')
//         break
//     case 5:
//         alert('비교하려는 값보다 큽니다.')
//         break
//     default:
//         alert('어떤 값인지 파악이 되지 않습니다.')
// }



// let a = "1"
// let b = 0

// switch(+a){
//     case b+1:
//         alert('표현식 +a 는 1, 표현식 b+1은 1이므로 결국 코드가 실행됨')
//         break
//     default:
//         alert('이 코드는 실행되지 않습니다.')
// }



// let a = 3

// switch (a){
//     case 4:
//         alert('계산이 맞습니다.')
//         break
//     case 3:
//     case 5:
//         alert('계산이 틀립니다.')
//         alert('수학 수업을 다시 들어보는걸 권유 드립니다.')
//         break

//     default:
//         alert('계산 결과가 이상하네요.')
// }



// let weather = '맑음'

// switch(weather){
//     case '구름':
//         alert('조퇴한다.')
//         break
//     case '눈':
//     case '비':
//         alert('결석한다.')
//         break
//     case '맑음':
//         alert('학원에 나온다')
//         break

//     default:
//         alert('조퇴한다.')
// }



// let arg = prompt('값을 입력하세요.')

// switch(arg){
//     case '0':
//     case '1':
//         alert('0이나 1을 입력하셨습니다.')
//         break

//     case '2':
//         alert('2를 입력하셨습니다.')
//         break

//     case 3:
//         alert('이 코드는 실행되지 않습니다.')
//         break

//     default:
//         alert('알 수 없는 값을 입력하셨습니다.')
// }



let username = 'sunrise'
let password = '12345'
let confirmPassword = '12345'

// if(username === 'sunrise'){
//     if(password==='12345'){
//         if(password===confirmPassword){
//             console.log('로그인에 성공하였습니다.')
//         }else{
//             console.log('비밀번호 확인에 실패하였습니다.')
//         }
//     }else{
//         console.log('비밀번호가 일치하지 않습니다.')
//     }
// }else{
//     console.log('올바른 사용자가 아닙니다.')
// }

if(username !== 'sunrise'){
    console.log('올바른 사용자가 아닙니다.')
}else if(password !== '12345'){
    console.log('비밀번호가 일치하지 않습니다.')
}else if(password !== confirmPassword){
    console.log('비밀번호 확인에 실패하였습니다.')
}else{
    console.log('로그인에 성공하였습니다.')
}