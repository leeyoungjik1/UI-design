let firstName = ""
let lastName = ""
let nickName = "바이올렛"

console.log(firstName||lastName||nickName||"익명")

true || alert("not printed");
false || alert("printed");

let hour = 12
let minute = 30

if(hour == 12 && minute ==30){
    console.log('현재 시각은 12시 30분입니다.')
}

let year = prompt('ECMAScript-2015 명세는 몇년도에 출판되었을까요?', '')

if(year == 2015){
    alert('정답입니다.')
}else{
    alert('오답입니다.')
}