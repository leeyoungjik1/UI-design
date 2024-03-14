// function add(a, b){
//     return a + b
// }
// add['description'] = 'add two numbers'
// add['parameter-info'] = function(){
//     console.log(`parameters: ${add.name} function needs ${add.length} parameters`)
// }
// console.dir(add)

// console.log('---함수 정보---')
// console.log('description: ', add['description'])

// add['parameter-info']()




// const launguage = ['korean', 'japanese', 'english', 'chinese', 'russian']
// function copyArr(arr){
//     const copyArr = []

//     for(let element of arr){
//         copyArr.push(element)
//     }

//     return copyArr
// }

// const copyArr = copyArr(launguage)
// console.log(copyArr)
// console.log(launguage === copyArr)



// function Music(){
//     this.name = '보고 싶다'
//     this.artist = '김범수'
//     this.release = '2002-12-17'

//     const music = {
//         name: '금요일에 만나요',
//         artist: 'IU',
//         release: '2013-12-30',
//         info: () => {
//             console.log(this)
//             console.log(`${this.name} - ${this.artist} 는 ${this.release} 에 발매되었습니다.`)
//         }
//     }
//     return music
// }
// const music = new Music()
// console.log(music)
// music.info()




// function Music(){
//     this.name = '보고 싶다'
//     this.artist = '김범수'
//     this.release = '2002-12-17'
// }
// const music = new Music()
// console.log(music)
// music.info()



// function add(a, b){
//     console.log(arguments) // arguments 객체

//     console.log(arguments[0])
//     console.log(arguments[1])
//     console.log(arguments.length)
//     console.log(arguments.callee)
// }
// add("apple", "banana")



// function add(a, b){
//     a = a ?? 0
//     b = b ?? 0
//     return a + b
// }

// console.log(add(3, 5)) // 8
// console.log(add(3)) // 3
// console.log(add()) // 0
// console.log(add('', null)) // 0


// 배열 복사하기
// function copyArr(arr){
//     if(!Array.isArray(arr)) return // 유효성 검증하기
//     if(arr.length === 0) return

//     const copiedArr = []

//     for(let element of arr){
//         copiedArr.push(element)
//     }

//     return copiedArr
// }

// const copiedArr = copyArr()
// console.log(copiedArr)

// console.log(copyArr(3))
// console.log(copyArr('apple'))
// console.log(copyArr(false))
// console.log(copyArr([]))
// console.log(copyArr({}))
// console.log(copyArr(null))



// function add(...args){
//     console.log(args)

//     let sum = 0
//     for(let arg of args){
//         sum +=arg
//     }
//     return sum
// }



// console.log(add()) 
// console.log(add(1))
// console.log(add(1, 2))
// console.log(add(1, 2, 3))
// console.log(add(1, 2, 3, 4))
// console.log(add(1, 2, 3, 4, 5))



// function sortByOrder(flag, ...args){
//     args.sort((a,b) => flag * (a-b))
//     return args
// }


// console.log(sortByOrder(1, 5, 2, 3, 1, 4)) // 오름차순 정렬
// console.log(sortByOrder(-1, 5, 2, 3, 1, 4)) // 내림차순 정렬




function printCircleInfo(x, y, radius){
    console.log('원의 중심: ', x, ',', y)
    console.log('반지름: ', radius)
}

printCircleInfo(...[3, 4, 5])