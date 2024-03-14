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

function filterSeoul(friend){
    if(friend.city === 'seoul'){
        return friend
    }
}

function filter(f, arr){
    const result = []
    arr.forEach(function(friend){
        if(f(friend) !== undefined){
            result.push(f(friend))
        }
    })
    return result
}

const seoulFriends = filter(filterSeoul, friends)
console.log(seoulFriends)