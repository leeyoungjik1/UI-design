// 연습문제 1


// const animal = {
//     jumps: null
// }
// const rabbit = {
//     __proto__: animal,
//     jumps: true
// }
  
// console.log( rabbit.jumps ) // ? true

// delete rabbit.jumps

// console.log( rabbit.jumps ) // ? null

// delete animal.jumps

// console.log( rabbit.jumps ) // ? unde


// 연습문제 2

// const head = {
//     glasses: 1
// }

// const table = {
//     pen: 3,
//     __proto__: head
// }

// const bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
// }

// const pockets = {
//     money: 2000,
//     __proto__: bed
// }

// console.log(pockets.pen)
// console.log(bed.glasses)



// 연습문제 3

const animal = {
    eat() {
        this.full = true
    }
}

const rabbit = {
    __proto__: animal
}

rabbit.eat()
console.log(rabbit)



// 연습문제 4

const hamster = {
    stomach: [],

    eat(food) {
        this.stomach = food;
    }
}

const speedy = {
    __proto__: hamster
}

const lazy = {
    __proto__: hamster
}

// 햄스터 speedy가 음식을 먹습니다.
speedy.eat("apple")
console.log( speedy.stomach ) // apple
console.log(speedy)
// console.log(lazy)
// 햄스터 lazy는 음식을 먹지 않았는데 배에 apple이 있다고 나오네요. 왜 그럴까요? lazy는 배가 비어있도록 고쳐주세요.
console.log( lazy.stomach ) // apple