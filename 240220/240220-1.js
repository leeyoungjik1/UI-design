// let i = 3

// while(i){
//     console.log(i)
//     i--
// }

// let value = 3
// while(value<=3){
//     let value=5
// }

// let a =1

// while(a<100){
//     if(a%5===0){
//         console.log(a)
//     }
//     a++
// }

// let i = 5

// do{
//     console.log(i)
//     i++
// }while(i<3)

// let a=1

// do{
//     if(a%5===0){
//         console.log(a)
//     }
//     a++
// }while(a<100)


// for(let i=0; i<3; i++){
//     console.log(i)
// }


// let sum = 0

// while(true){
//     let value = +prompt('숫자를 입력하세요.', '')
//     if(!value){
//         break
//     }
//     sum+=value
// }
// console.log(sum)


// let time = 0

// console.log('loading...')
// while(time<10000000000){
//     if(time===700000000){
//         break
//     }
//     time++
// }
// console.log('finished loading!')


// for(let i=0; i<10; i++){
//     if(i%2===0){
//         continue
//     }
//     console.log(i)
// }


let letter = 'A'
let str = ''

for(let i = 0; i<3; i++){
    for(let j = 0; j<7; j++){
        str+=letter        
    }
    str += '\n'
}
console.log(str)