let number = new Array()
let multiple = 3

for(let n=0; n<20; n++){
    number[n] = multiple*(n+1)
}

for(let i=0; i<number.length; i++){
    if(number[i]%6 === 0){
        number[i] = null
    }else{
        continue;
    }
}

console.log(number)