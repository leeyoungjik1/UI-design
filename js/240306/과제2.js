const movies = [
    {title: 'Harry Potter', release: '2003-02-22'}, 
    {title: 'Indiana Jhones', release: '2009-01-09'}, 
    {title: 'Jurassic Park', release: '2007-04-13'},
    {title: 'Iron man', release: '2012-12-18'},
    {title: 'Spider man', release: '2017-03-07'}
]

// 구현하기

function isYear(movie){
    // let year = ''
    // for(let n=0; n<4; n++){
    //     year = year + movie.release[n]
    // }
    return movie.release > '2005' && movie.release < '2010'
}

const found = movies.find(isYear)
console.log(found)
