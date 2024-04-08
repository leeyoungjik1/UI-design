// let a, b
// const c = [a = 5, b = 7]
// console.log(c[0])


// let a, b
// {name:s} = {name}
// [a = 5, b = 7] = [1]
// console.log(a) // 1
// console.log(b) // 7


const book = {
    name: 'javascript',
    price: 21000,
    release: '2019-12-03',
    authors: ['mark', 'victoria']
}

console.log(Object.entries(book))