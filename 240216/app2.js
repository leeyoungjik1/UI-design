const age = 27
const temperature = 32.7

console.log(Number.isInteger(age))
console.log(Number.isInteger(temperature))

const age2 = "32"
const temperature2 = "37.6"
const msg = "hello world 237"

const age2_casted = Number(age2)
const temp_casted = Number(temperature2)
const msg_casted = Number(msg)

console.log(typeof age2)
console.log(typeof age2_casted)
console.log(age2_casted)

console.log(typeof temperature2)
console.log(typeof temp_casted)
console.log(temp_casted)

console.log(typeof msg)
console.log(typeof msg_casted)
console.log(msg_casted)

const msg2 = "hello world 237"
const msg3 = "237 hello world"

const msg2_casted = parseInt(msg2)
const msg3_casted = parseFloat(msg3)

console.log(msg2_casted)
console.log(msg3_casted)
