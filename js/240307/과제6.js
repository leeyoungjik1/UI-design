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



friends.sort(function(a,b){
    if(a.age>b.age){
        return 1
    }
    if(a.age<b.age){
        return -1
    }
    return 0
})

const rFriends = []

function ageUnder30(friend){
    if(friend.age<30){
        rFriends.push(friend)
    }
}

friends.forEach(ageUnder30)

console.log(rFriends)