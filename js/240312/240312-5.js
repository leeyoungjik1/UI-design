// const animal = {
//     eats: true,
//     walk(){
//         console.log("동물이 걷습니다.")
//     }
// }
// const rabbit = {
//     jumps: true,
//     __proto__: animal
// }
// const longEar = {
//     earLength: 10,
//     __proto__: rabbit
// }
// // rabbit 은 animal 을 상속한다.
// longEar.walk()
// console.log( longEar.jumps )
// console.log( longEar )
// // 프로퍼티 eats과 jumps를 rabbit에서도 사용할 수 있다.


const user = {
    name: 'John',
    surname: 'Smith',

    set fullName(value){
        [this.name, this.surname] = value.split(' ')
    },
    get fullName(){
        return `${this.name} ${this.surname}`
    }
}

const admin = {
    __proto__: user,
    isAdmin: true
}

console.log(admin.fullName)

admin.fullName = 'Alice Cooper'
console.log(admin.fullName)