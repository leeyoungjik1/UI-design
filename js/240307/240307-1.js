// const numbers = [1, 2, 3, 4, 5]


// function multiplyByThree(n){
//     return n*3
// }


// const numbersRefined = numbers.map(multiplyByThree)
// console.log(numbersRefined)




// var numbers = [1, 4, 9]

// const numbersRefined = numbers.map(Math.sqrt)
// console.log(numbersRefined)




// const userEmails = [
//     'victoria@gmail.com',
//     'sun@gmail.com',
//     'johseb@gmail.com',
//     'syleemomo@gmail.com',
//     'hannah@gmail.com',
//     'shara@gmail.com',
//     'martin@gmail.com',
//     'gorgia@gmail.com',
//     'nana@gmail.com',
//     'dannel@gmail.com'
// ]


// function removeDotCom(userEmail){
//     return userEmail.split('@')[0]
// }
// function displayUserID(userID){
//     console.log(userID)
// }

// const userIDs = userEmails.map(removeDotCom)
// console.log(userIDs)

// userIDs.forEach(displayUserID)




// var kvArray = [
//     { key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 },
// ]



// const reformattedArray = kvArray.map(function(obj){
//     const rObj = {}
//     rObj[obj.key] = obj.value
//     return rObj
// })

// console.log(reformattedArray)



// const text = "Hello World"
// const result = Array.from(text).map(function(letter){
//     return letter.charCodeAt(0)
// })
// console.log(result)


const inputs = document.querySelectorAll('.user-input')


function getInputValues(){
    const results = Array.from(inputs).map(function(input){
        return input.value
    })
    
    console.log(results)

    if(results.includes('')){
        console.log('입력하지 않은 부분이 남아 있습니다!')
    }else{
        console.log('모든 입력 완료')
    }
}

for(let input of inputs){
    input.addEventListener('input', getInputValues)
}