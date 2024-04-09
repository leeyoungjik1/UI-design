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
const arrCity = friends.sort(function(a,b){
    if(a.city>b.city){
        return 1
    }else if(a.city<b.city){
        return -1
    }
    return 0
})

arrCity.sort(function(a,b){
    if(a.city === b.city){
        if(a.age>b.age){
            return 1
        }else if(a.age<b.age){
            return -1
        }
        return 0
    }
})

function friendsInSeoul(friend){
    return friend.city === 'seoul'
}
// console.log(arrCity)


const found = arrCity.findIndex(friendsInSeoul)
console.log(arrCity.slice(found))

