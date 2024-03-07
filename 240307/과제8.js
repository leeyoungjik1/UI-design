const movies = [
    {title: 'Harry Potter', release: '2003-02-22'}, 
    {title: 'Indiana Jhones', release: '2009-01-09'}, 
    {title: 'Terminator', release: '2007-04-11'},
    {title: 'Dracula', release: '2007-04-13'},
    {title: 'Jurassic Park', release: '2007-05-13'},
    {title: 'Iron man', release: '2012-12-18'},
    {title: 'Spider man', release: '2017-03-07'}
]

movies.sort(function(a,b){
    if(a.release > b.release){
        return -1
    }
    if(a.release < b.release){
        return 1
    }
    return 0
})


console.log(movies)