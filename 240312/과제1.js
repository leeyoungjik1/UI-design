// const _2dArray = [[1, 2], [3, 4], [5, 6], [7,8], [9, 10]]


const _2dArray = []
const columns = 2

for(let i=1; i<10; i=i+columns){
    _2dArray.push([i, i+1])
}

console.log(_2dArray)