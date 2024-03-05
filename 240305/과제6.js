const movies = [
    {title: 'Harry Potter', release: '2003-02-22'}, 
    {title: 'Indiana Jhones', release: '2009-01-09'}, 
    {title: 'Jurassic Park', release: '2007-04-13'},
    {title: 'Iron man', release: '2012-12-18'},
    {title: 'Spider man', release: '2017-03-07'}
]

const movies_copied = []

for(let i=0; i<movies.length; i++){
    movies_copied[i] = {title: movies[i].title.slice(), release: movies[i].release.slice()}
}

// 구현하기

movies[1].title = 'syleemomo' // 원본배열 변경

console.log(movies)
console.log(movies_copied)