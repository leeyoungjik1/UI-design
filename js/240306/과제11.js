const users = [
    {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
    {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
    {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'},
    {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'},
    {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'},
    {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
    {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'},
    {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
    {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
    {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'},
]

// 구현하기

function isdotCom(email){
    let emailDotCom = ''
    for(let i=email.length-4; i<email.length; i++){
        emailDotCom += email[i]
    }
    if(emailDotCom === '.com'){
        return true
    }
}


function isUser(user){
    return user.age > 0 
    && Number.isInteger(user.age) 
    && user.email.includes('@') 

    && isdotCom(user.email) === true  // 같음
    && user.email.lastIndexOf('.com') === user.email.length -4 //같음
}

const found = users.filter(isUser)
console.log(found)