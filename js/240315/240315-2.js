// function factorial(n){
//     if(factorial[n]) return factorial[n]
//     console.log('fact!', n)
//     if(n === 0 || n === 1) return 1
//     else{
//         factorial[n] = n * factorial(n-1)
//         return factorial[n]
//     }
// }

// console.log(factorial(3) + factorial(6))




function getInfo(friend1, friend2){
    console.log(this)
    console.log(friend1, friend2)
}
const sunrise = {
    name: 'sunrise',
    age: 23,
    city: 'daegu'
}
const victoria = {
    name: 'victoria',
    age: 17,
    city: 'seoul'
}

getInfo.call(sunrise, '영희', '철수')
getInfo.call(victoria)

getInfo.apply(sunrise, ['영희', '철수'])

bindedGetInfo1 = getInfo.bind(sunrise)
bindedGetInfo1('영희', '철수')