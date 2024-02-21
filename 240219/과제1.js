// *** 연습과제 1

// let score = prompt('평점을 입력해주세요', '')

// if(score==='1'){
//     console.log('★☆☆☆☆')
// }else if(score==='2'){
//     console.log('★★☆☆☆')
// }else if(score==='3'){
//     console.log('★★★☆☆')
// }else if(score==='4'){
//     console.log('★★★★☆')
// }else if(score==='5'){
//     console.log('★★★★★')
// }else{
//     console.log('잘못된 평점입니다.')
// }


// *** 연습과제 2

// switch(score){
//     case'1':
//         alert('★☆☆☆☆')
//         break
//     case'2':
//         alert('★★☆☆☆')
//         break
//     case'3':
//         alert('★★★☆☆')
//         break
//     case'4':
//         alert('★★★★☆')
//         break
//     case'5':
//         alert('★★★★★')
//         break

//     default:
//         alert('잘못된 평점입니다.')
// }



// *** 연습과제 3

// let a = 12;

// switch (true) {
//   case (10 >= a && a > 3):
//     alert('3보다 크다!')
//     break 

//   case (a > 10): 
//     alert('10보다 크다!')
//     break 

//   default:
//     alert('3보다 작거나 같다.')
// }



// *** 연습과제 4

// let score = prompt('점수를 입력해주세요.')

// if(Number.isInteger(+score)!==true){
//     console.log('잘못된 점수입니다.')
// }else if(score<0){
//     console.log('잘못된 점수입니다.')
// }else if(score<60){
//     console.log('Fail')
// }else if(score<70){
//     console.log('2')
// }else if(score<80){
//     console.log('3')
// }else if(score<90){
//     console.log('4')
// }else if(score<=100){
//     console.log('5')
// }else{
//     console.log('잘못된 점수입니다.')
// }



// *** 연습과제 5

// let player1 = '가위'
// let player2 = '바위'

// if(player1==='가위'){
//     if(player2==='바위'){
//         console.log('player2 우승')
//     }
//     else if(player2==='가위'){
//         console.log('비겼습니다.')
//     }
//     else if(player2==='보'){
//         console.log('player1 우승')
//     }
//     else{
//         console.log('가위, 바위, 보 게임이 실행되지 않습니다.')
//     }
// }else if(player1==='바위'){
//     if(player2==='바위'){
//         console.log('비겼습니다.')
//     }
//     else if(player2==='가위'){
//         console.log('player1 우승')
//     }
//     else if(player2==='보'){
//         console.log('player2 우승')
//     }
//     else{
//         console.log('가위, 바위, 보 게임이 실행되지 않습니다.')
//     }
// }else if(player1==='보'){
//     if(player2==='바위'){
//         console.log('player1 우승')
//     }
//     else if(player2==='가위'){
//         console.log('player2 우승')
//     }
//     else if(player2==='보'){
//         console.log('비겼습니다.')
//     }
//     else{
//         console.log('가위, 바위, 보 게임이 실행되지 않습니다.')
//     }
// }
// else{
//         console.log('가위, 바위, 보 게임이 실행되지 않습니다.')
//     }


// *** 연습과제 6

// let loginId = prompt('아이디를 입력해주세요.')
// let id = 'Admin'
// let password = 'TheMaster'
// let cancle = '취소되었습니다.'
// let idError = '아이디를 다시 입력해주세요.'
// let passError = '인증에 실패하였습니다.'

// if (loginId==''||loginId==null){
//     alert(cancle)
// }else if(loginId !== id){
//     alert(idError)
// }else{
//     let loginPass = prompt('비밀번호를 입력해주세요.')
//     if(loginPass==''||loginPass==null){
//         alert(cancle)
//     }else if(loginPass !== password){
//         alert(passError)
//     }else{
//         alert('환영합니다!')
//     }
// }


// *** 연습과제 7

function getRandom(min, max)
{
	return Math.floor(Math.random() * (max - min + 1) + min);
}

let player1 = getRandom(0,2)
let player2 = getRandom(0,2)

switch(player1){
    case 0: player1 = '가위'
    break

    case 1: player1 = '바위'
    break

    case 2: player1 = '보'
}
switch(player2){
    case 0: player2 = '가위'
    break

    case 1: player2 = '바위'
    break

    case 2: player2 = '보'
}

console.log('player1:',player1)
console.log('player2:',player2)

if(player1===player2){
        console.log('비겼습니다.')
}else if(player1==='가위'){
    if(player2==='바위'){
        console.log('player2 우승')
    }
    else if(player2==='보'){
        console.log('player1 우승')
    }
}
else if(player1==='바위'){
    if(player2==='가위'){
        console.log('player1 우승')
    }
    else if(player2==='보'){
        console.log('player2 우승')
    }
}else if(player1==='보'){
    if(player2==='바위'){
        console.log('player1 우승')
    }
    else if(player2==='가위'){
        console.log('player2 우승')
    }
}
else{
        console.log('가위, 바위, 보 게임이 실행되지 않습니다.')
    }