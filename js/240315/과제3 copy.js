const friends = [
    {name: 'victoria', age: 13, city: 'seoul'},
    {name: 'sun', age: 34, city: 'busan'},
    {name: 'johseb', age: 25, city: 'busan'},
    {name: 'syleemomo', age: 9, city: 'seoul'},
    {name: 'hannah', age: 41, city: 'daegu'},
    {name: 'shara', age: 37, city: 'seoul'},
    {name: 'martin', age: 28, city: 'daegu'},
    {name: 'gorgia', age: 39, city: 'seoul'},
    {name: 'nana', age: 24, city: 'busan'},
    {name: 'dannel', age: 19, city: 'seoul'},
]

function Person(name, age, city, friends){
    this.name = name
    this.age = age
    this.city = city

    // 초기값이 배열이나 객체인 경우 깊은복사로 저장 및 조회하기
    let _friends = JSON.parse(JSON.stringify(friends)) // 전역변수 friends 는 참조만 하고 프라이빗 변수 _friends 는 외부에서 변경하지 못하도록 깊은복사로 저장함

    this.getFriends = function(){
        return JSON.parse(JSON.stringify(_friends)) // 프라이빗 변수 _friends 를 보호하기 위하여 깊은복사로 조회함
    }

}
Person.prototype = {
    get friends(){
        return this.getFriends() 
    },
    filterFriendsInMyCity(){ 
        return this.friends.filter(friend => friend.city === this.city) 
    },
}


const person = new Person('영희', 23, 'daegu', friends)
console.log(person)

console.log(person.friends === friends) // 전역변수 friends 와 프라이빗변수 _friends 주소가 다름을 확인함 (복사본을 저장하기 때문)
person.friends[0].name =  "태양" // 프라이빗 변수 _friends 를 변경하지 못함 (복사본을 조회하기 때문)

console.log(person.friends) 
console.log(person.filterFriendsInMyCity())

const person2 = new Person('철수', 35, 'seoul', friends)
console.log(person2.friends) 
console.log(person2.filterFriendsInMyCity())