function Movie(title, author, release){
    this.title = title
    this.author = author
    this.release = release

    this.printMovieInfo = function getInfo(){
            console.log(`${this.title}-${this.author}는 ${this.release}에 발매되었다.`)
        } 
}

const movie = new Movie("해리포터", "조앤K롤링", "2003 년 3월 23일")
movie.printMovieInfo()