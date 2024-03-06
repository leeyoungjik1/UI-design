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

let checkCity = []

for(let n=0; n<friends.length; n++){
    if(!checkCity.includes(friends[n].city)){
        checkCity.push(friends[n].city)
    }
}
console.log(checkCity)

// 구현하기

for(let n=0; n<checkCity.length; n++){
    function filterCity(friend){
        return friend.city === checkCity[n]
    }
    let found = friends.filter(filterCity)

    console.log(`${checkCity[n]} :`, found.length)
}


console.log('------------------------------------------')



function findPeopleinthecity(frinds, city){
    return frinds.filter(friend => friend.city === city).length 
}

for(let n=0; n<checkCity.length; n++){
console.log(`${checkCity[n]} :`, findPeopleinthecity(friends, checkCity[n]))
}
