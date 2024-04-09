// *** 연습과제 1

// let a = 1, b = 1;

// let c = ++a; // ?
// let d = b++; // ?

// // a=2 b=2 c=2 d=1

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)


// *** 연습과제 2

// let a = 2;

// let x = 1 + (a *= 2);

// // a=4 x=5

// console.log(a)
// console.log(x)


// *** 연습과제 3

// "" + 1 + 0  // "10"
// "" - 1 + 0  // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // "9px"
// "$" + 4 + 5 // "$45" 
// "4" - 2 // 2
// "4px" - 2 // NaN
// 7 / 0 // infinity
// "  -9  " + 5 // "  -9  5"
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN
// " \t \n" - 2

// a=" \t \n" - 2
// console.log(a)


// *** 연습과제 4

// let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
// let b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);

// alert(+a + +b); // 12


// *** 연습과제 5

// 5 > 4 // true
// "apple" > "pineapple" // false
// "2" > "12" // true
// undefined == null // true
// undefined === null // false
// null == "\n0\n" // false
// null === +"\n0\n" // false

// a=null === +"\n0\n"
// console.log(a)


// *** 연습과제 6

// alert( null || 2 || undefined ); // 2


// *** 연습과제 7

// alert( alert(1) || 2 || alert(3) ); // 
// console.log(alert(1)) // undefined


// *** 연습과제 8

// alert( 1 && null && 2 ); // null


// *** 연습과제 9

// alert( alert(1) && alert(2) );


// *** 연습과제 10

// alert( null || 2 && 3 || 4 ); // 3


// *** 연습과제 11

// let age = prompt('나이를 입력하세요')

// if(age>=14 && age<=90){
//     alert('나이가 범위에 해당됩니다.')
// }else{
//     alert('나이가 범위에 해당되지 않습니다.')
// }


// *** 연습과제 12

// let age = prompt('나이를 입력하세요.')

// // if(!(age>=14) || !(age<=90)){
// //     alert('나이가 범위에 해당되지 않습니다.')
// // }else{
// //     alert('나이가 범위에 해당됩니다.')
// // }

// if(age<14 || age>90){
//     alert('나이가 범위에 해당되지 않습니다.')
// }else{
//     alert('나이가 범위에 해당됩니다.')
// }


// *** 연습과제 13

// if (-1 || 0) alert( 'first' ); // o
// if (-1 && 0) alert( 'second' ); // x
// if (null || -1 && 1) alert( 'third' ); // o