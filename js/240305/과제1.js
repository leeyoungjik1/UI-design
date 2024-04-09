let number = new Array(100).fill(0)
let multiple = 3

for(let n=1; n<number.length/multiple; n++){
    number[multiple*n-1] = multiple*n
}
console.log(number)