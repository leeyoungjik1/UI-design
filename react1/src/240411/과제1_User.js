import React from "react";

const users = [
    {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
    {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
    {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'}, // 탈락
    {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'}, // 탈락
    {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'}, // 탈락
    {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
    {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'}, // 탈락
    {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
    {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
    {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'},
]

const setUsers = users.filter(function(user){
    return user = user.age > 0 && Number.isInteger(user.age) && user.email.includes('@') && user.email.includes('.com')
})

function User(){
    return(
        <>
            <h1>* 유효한 사용자 정보 *</h1>
            <div>
                {setUsers.map((user) => 
                    <>
                        <h2>{user.name} ({user.age})</h2>
                        <h2>{user.city}</h2>
                        <h2>{user.email}</h2>
                        <h2>---------------------</h2>
                    </>
                )}
            </div>
        </>
    )
}
export default User