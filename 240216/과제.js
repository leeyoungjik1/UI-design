let sofa_price = 360000
console.log(sofa_price)

let shoes_size = 275
console.log(shoes_size)

const cir = 3.14
console.log(cir)

const name = "sunrise"
const message = "Happy halloween, "

// 구현하기
console.log(message+name)

const letter = 'Dear syleemomo. \n\
Hello, syleemomo ^^ \n\
My name is kiki. Your sincere friend \n\
How are you thesedays? \n\
Are you busy or not? \n\
I guess you haven\'t sleep much last night \n\
I am spending good day thesedays ! \n\
I hope to see you soon. See you later :)'

console.log(letter)

const food = ['apple', 'banana', 'rice']
console.log(food)

const food2 = {
    name: 'apple',
    price: 34000,
    type: 'korean food'
}
console.log(food2)


const hoursForDay = 24
const bookName = "Harry Potter"
const isChecked = true

// 자료형 검사하기

console.log(typeof hoursForDay)
console.log(typeof bookName)
console.log(typeof isChecked)


const cities = ["seoul", "deagu", "busan"]
const bookInfo = {
    name: 'Harry Potter',
    price: 17000,
    author: 'J.K Rolling'
}

// 객체인지 배열인지 구분하기 - 자료형 검사

console.log(Array.isArray(cities))
console.log(bookInfo instanceof Array)


const distanceSeoulToBusan = 370
const sizeOfYourHeight = 275.9

// 정수형인지 실수형인지 구분하기 - 자료형 검사

console.log(Number.isInteger(distanceSeoulToBusan))
console.log(Number.isInteger(sizeOfYourHeight))


const speedOfCar = "37.5 m/s"
const heightOfYourFriend = "289 cm"

// 숫자형으로 변환하기

const speedOfCar_casted = parseFloat(speedOfCar)
const heightOfYourFriend_casted = parseInt(heightOfYourFriend)
console.log(speedOfCar_casted)
console.log(heightOfYourFriend_casted)


const heightOfYourFriend2 = 289
const temperature = 13.9
const fruits = ["apple", "banana", "orange"]

// 문자열 타입으로 변환하기

const heightOfYourFriend2_casted = heightOfYourFriend2.toString()
const temperature_casted = temperature.toString()
const fruits_casted = fruits.toString()

console.log(heightOfYourFriend2_casted)
console.log(temperature_casted)
console.log(fruits_casted)