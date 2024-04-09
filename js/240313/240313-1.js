// const book = {
//     name: 'javascript',
//     price: 20000,
//     release: '2019-12-03',
//     authors: ['mark', 'victoria'],
//     getInfo(){
//         console.log('------책의 정보-------')
//         console.log('제목: ', this.name)
//         console.log('가격: ', this.price)
//         console.log('초판: ', this.release)
//         console.log('저자: ', this.authors.join(' '))
//     }
// }
// book.getInfo()



// function Book(name, price, release, authors){
//     this.name = name
//     this.price = price
//     this.release = release
//     this.authors = authors

//     this.getInfo = function(){
//         console.log('------책의 정보-------')
//         console.log('제목: ', this.name)
//         console.log('가격: ', this.price)
//         console.log('초판: ', this.release)
//         console.log('저자: ', this.authors.join(' '))
//     }
// }
// const book = new Book('javascript', 21000, '2019-12-03', ['mark', 'victoria'])
// console.dir(Book)
// book.getInfo()




// function Book(name, price, release, authors){
//     this.name = name
//     this.price = price
//     this.release = release
//     this.authors = authors

// }
// Book.prototype = {
//     getInfo(){
//         console.log('------책의 정보-------')
//         console.log('제목: ', this.name)
//         console.log('가격: ', this.price)
//         console.log('초판: ', this.release)
//         console.log('저자: ', this.authors.join(' '))
//     },
//     discount(){
//         if(this.name === 'python'){
//             this.price -= 1000
//         }
//     },
//     get getPrice(){
//         return this.price
//     },
//     set addAuthor(newAuthor){
//         this.authors.push(newAuthor)
//     }
// }
// const book1 = new Book('javascript', 21000, '2019-12-03', ['mark', 'victoria'])
// const book2 = new Book('python', 18700, '2022-12-22', ["sunrise"])


// book1.discount()
// book1.addAuthor = 'sunrise'
// console.log(book1.getPrice)
// console.log(book1.authors)

// book2.discount()
// console.log(book2.getPrice)




// const book = {
//     name: 'javascript',
//     price: 21000,
//     release: '2019-12-03',
//     authors: ['mark', 'victoria']
// }

// for(let prop in book){
//     console.log(prop, book[prop])
// }


// console.log('price' in book)
// console.log('title' in book)




// const book = {
//     name: 'javascript',
//     price: 21000,
//     release: '2019-12-03',
//     authors: ['mark', 'victoria']
// }

// const newBook = {
//     ...book,
//     release: '변경'
// }
// console.log(book)
// console.log(newBook)



// const book = {
//     name: 'javascript',
//     price: 21000,
//     release: '2019-12-03',
//     authors: ['mark', 'victoria']
// }
// const target = Object.assign({}, book)
// book.price = 3200
// book.authors[0] = '다른 저자'
// console.log(book)
// console.log(target)


// const book = {
//     name: 'javascript',
//     price: 21000,
//     release: '2019-12-03',
//     authors: ['mark', 'victoria']
// }
// const target = JSON.parse(JSON.stringify(book))

// book.price = 3200
// book.authors[0] = '다른 저자'
// console.log(book)
// console.log(target)



// const book = {
//     name: 'javascript',
//     price: 21000,
//     release: '2019-12-03',
//     authors: ['mark', 'victoria']
// }

// const {name: bookName, authors: bookAuthors} = book

// console.log(bookName)


// const {a,b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
// console.log(a)
// console.log(b)
// console.log(rest)


// const o = { p: 42, q: true }
// const { p: foo, q: bar } = o
// console.log(foo, bar)


// const {a=10, b=5} = {a:3}
// console.log(a)
// console.log(b)


// function drawES5Chart({size = 'big', cords = {x:0, y:0}, radius = 25} = {}){


//     // options = options === undefined ? {} : options
//     // const size = options.size === undefined ? "big" : options.size
//     // const cords = options.cords === undefined ? {x:0, y:0} : options.cords
//     // const radius = options.radius === undefined ? 25 : options.radius
//     console.log(size, cords, radius)

// }

// drawES5Chart({
//     cords: {x: 18, y: 30},
//     radius: 30
// })



const metadata = {
    title: "Scratchpad",
    translations: [
      {
        locale: "de",
        localization_tags: [],
        last_edit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung",
      },
    ],
    url: "/ko/docs/Tools/Scratchpad",
}

const {title, translations: [{url: aa, last_edit}]} = metadata

console.log(aa)
console.log(last_edit)



const people = [
    {
      name: "Mike Smith",
      family: {
        mother: "Jane Smith",
        father: "Harry Smith",
        sister: "Samantha Smith",
      },
      age: 35,
    },
    {
      name: "Tom Jones",
      family: {
        mother: "Norah Jones",
        father: "Richard Jones",
        brother: "Howard Jones",
      },
      age: 25,
    },
]

for(let {
    name: n,
    family: {
        father: f
    }
} of people){
    console.log(n, f)
}




function userId({id}){
    return id
}
function whois({displayName, fullName: {firstName}}){
    console.log(firstName)
}

const user = {
    id: 42,
    displayName: "jdoe",
    fullName: {
        firstName: "John",
        lastName: "Doe",
    },
}

console.log("아이디: ", userId(user))
whois(user)